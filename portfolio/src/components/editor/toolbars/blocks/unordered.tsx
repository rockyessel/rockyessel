'use client';

import { List } from 'lucide-react';
import { useSlate } from 'slate-react';
import { cn } from '@/lib/utils/helpers';
import { isBlockActive, toggleBlock } from '../../lib/helpers';

const BlockUnorderedToolbar = () => {
  const editor = useSlate();

  const handleInsertBulletedList = () => {
    toggleBlock(editor, 'bulleted-lists', 'justify');
  };

  const isActive = isBlockActive(editor, 'bulleted-lists');

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleInsertBulletedList}
      className={cn('outline-none border-none', isActive ? 'active' : '')}
    >
      <List
        size={37}
        strokeWidth={2.25}
        className='my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

export default BlockUnorderedToolbar;
