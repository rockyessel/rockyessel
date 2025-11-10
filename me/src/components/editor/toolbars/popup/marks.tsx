'use client';

import { Dispatch, Fragment, SetStateAction, useRef } from 'react';
import { ReactEditor } from 'slate-react';
import { BaseSelection, Editor, Range } from 'slate';
import { Separator } from '@/components/ui/separator';
import MarkButton from '../marks';
import PopupPanel from './panel';
import { PANEL_MARKS } from '../../lib/constants';
import BlockLinkToolbar from '../blocks/link';

interface Props {
  showLinkModal: boolean;
  setShowLinkModal: Dispatch<SetStateAction<boolean>>;
}

const MarksPopupPanel = ({ ...props }: Props) => {
  const popupPanelRef = useRef<HTMLDivElement>(null);
  const { setShowLinkModal, showLinkModal } = props;

  const currentSelection = (editor: Editor) => {
    const selection = editor.selection;
    if (
      selection &&
      ReactEditor.isFocused(editor) &&
      Range.isExpanded(selection) &&
      Editor.string(editor, selection) !== ''
    )
      return selection;
    else return null;
  };

  return (
    <PopupPanel
      ref={popupPanelRef}
      placement='top'
      currentSelection={currentSelection}
    >
      <div className='flex items-center gap-1'>
        {PANEL_MARKS.map((mark, index) => (
          <MarkButton key={index} mark={mark.mark}>
            <mark.icon
              size={mark.iconSize}
              strokeWidth={2.25}
              className='w-[1.65rem] h-[1.65rem] p-1 my-auto hover:bg-neutral-800 hover:border-zinc-700/40 border border-transparent rounded-md cursor-pointer'
            />
          </MarkButton>
        ))}

        <Separator orientation='vertical' />

        <BlockLinkToolbar
          showLinkModal={showLinkModal}
          setShowLinkModal={setShowLinkModal}
        />
      </div>
    </PopupPanel>
  );
};

export default MarksPopupPanel;
