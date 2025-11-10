'use client';

import { cn } from '@/lib/utils/helpers';
import React, {
  HTMLProps,
  ReactNode,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  MouseEvent,
} from 'react';
import {HTMLDivProps} from '@/types'
import { BaseSelection, Editor } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import { ClientPortal } from '@/components/common/utilities';


interface Props {
  children: ReactNode | ((editor: Editor) => ReactNode);
  placement: 'top' | 'bottom';
  /**
   *  Called whenever the editor value changes
   *  @return null if you want to hide the container
   */
  currentSelection: BaseSelection | ((editor: Editor) => BaseSelection);
}

const PopupPanel = forwardRef<HTMLDivElement, Props & HTMLDivProps>(
  (props, ref) => {
    const { children, placement, currentSelection, ...divProps } = props;
    const editor = useSlate();
    const divRef = useRef<HTMLDivElement>(null);

    // Use useImperativeHandle to link the internal ref to the forwarded ref
    useImperativeHandle(ref, () => divRef.current as HTMLDivElement);

    useEffect(() => {
      const divElement = divRef.current;
      if (!divElement) return;

      const placementSelection =
        typeof currentSelection === 'function'
          ? currentSelection(editor)
          : currentSelection;

      if (placementSelection) {
        const domRange = ReactEditor?.toDOMRange(editor, placementSelection);
        const rect = domRange.getBoundingClientRect();

        divElement.style.opacity = '1';

        divElement.style.left = `${
          rect.left +
          window.pageXOffset -
          divElement.offsetWidth / 2 +
          rect.width / 2
        }px`;

        const top = `${
          rect.top + window.pageYOffset - divElement.offsetHeight - 8
        }px`;
        const bottom = `${rect.top + window.scrollY + rect.height + 6}px`;

        divElement.style.top = placement === 'top' ? top : bottom;
      } else {
        if (divElement.hasAttribute('style'))
          divElement.removeAttribute('style');
      }
    });

    const onMouseDown = (event: MouseEvent) => {
      event.preventDefault();
    };

    return (
      <ClientPortal>
        <div
          {...divProps}
          ref={divRef}
          onMouseDown={onMouseDown}
          className={cn(
            divProps.className,
            'bg-zinc-800 border border-zinc-700/40 rounded-md p-0.5',
            'absolute top-[-10000px] left-[-10000px] z-50 opacity-0 transition duration-75'
          )}
        >
          {typeof children === 'function' ? children(editor) : children}
        </div>
      </ClientPortal>
    );
  }
);

PopupPanel.displayName = 'PopupPanel';

export default PopupPanel;
