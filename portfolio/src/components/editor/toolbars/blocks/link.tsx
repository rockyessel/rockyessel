'use client';

import { Link } from 'lucide-react';
import { useSlate } from 'slate-react';
import { cn } from '@/lib/utils/helpers';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

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

  return (
    <button
      type='button'
      onMouseDown={onMouseDown}
      className={cn(
        'outline-none border border-transparent',
        showLinkModal
          ? 'rounded-md text-lime-600 bg-neutral-800 border border-zinc-700/40'
          : ''
      )}
    >
      <Link
        size={20}
        strokeWidth={2.25}
        className='w-[1.65rem] h-[1.65rem] p-1 my-auto hover:bg-neutral-800 hover:border-zinc-700/40 border border-transparent rounded-md cursor-pointer'
      />
    </button>
  );
};
export default BlockLinkToolbar;
