'use client';

import { Link } from 'lucide-react';
import { useSlate } from 'slate-react';
import { cn } from '@/lib/utils/helpers';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { isBlockActive } from '../../lib/helpers';

interface Props {
  showLinkModal: boolean;
  setShowLinkModal: Dispatch<SetStateAction<boolean>>;
}

const BlockLinkToolbar = ({ setShowLinkModal, showLinkModal }: Props) => {
  const editor = useSlate();

  const onMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    if (editor.selection) setShowLinkModal(true);
  };

  const isActive = isBlockActive(editor, 'link');

  return (
    <button
      type='button'
      onMouseDown={onMouseDown}
      className={cn(
        'outline-none border-none',
        showLinkModal &&
          'rounded-md text-lime-600 bg-neutral-800 border border-zinc-700/40',
        isActive && 'rounded-md text-lime-600 bg-neutral-800 border border-zinc-700/40'
      )}
    >
      <Link
        size={33}
        strokeWidth={2.25}
        className='my-auto hover:bg-neutral-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};
export default BlockLinkToolbar;
