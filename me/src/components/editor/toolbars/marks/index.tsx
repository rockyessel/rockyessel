'use client';

import { useSlate } from 'slate-react';
import { ReactNode, MouseEvent } from 'react';
import { cn } from '@/lib/utils/helpers';
import { LeafTypes } from '../../types';
import { markEvents } from '../../lib/helpers';

interface Props {
  mark: LeafTypes;
  children: ReactNode;
  className?: string;
}

const MarkButton = ({ mark, children, className }: Props) => {
  const editor = useSlate();
  const { isMarkActive, toggleMark } = markEvents(editor);
  const isActive = isMarkActive(mark);

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    toggleMark(mark);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      className={cn(
        'outline-none border border-transparent',
        isActive
          ? 'rounded-md text-lime-600 bg-neutral-800 border border-zinc-700/40'
          : '',
        className
      )}
    >
      {children}
    </button>
  );
};
export default MarkButton;
