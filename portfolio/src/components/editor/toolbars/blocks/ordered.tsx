'use client';

import React from 'react';
import { useSlate } from 'slate-react';
import { cn } from '@/lib/utils/helpers';
import { ListOrdered } from 'lucide-react';
import { isBlockActive, toggleBlock } from '../../lib/helpers';

const BlockOrderedToolbar = () => {
  const editor = useSlate();

  const handleInsertNumberedList = () => {
    toggleBlock(editor, 'numbered-lists', 'justify');
  };

  const isActive = isBlockActive(editor, 'numbered-lists');

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleInsertNumberedList}
      className={cn('outline-none border-none', isActive ? 'active' : '')}
    >
      <ListOrdered
        size={37}
        strokeWidth={2.25}
        className='my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

export default BlockOrderedToolbar;
