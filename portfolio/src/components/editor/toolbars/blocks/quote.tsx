'use client';

import { useSlate } from 'slate-react';
import { TextQuote } from 'lucide-react';
import { cn } from '@/lib/utils/helpers';
import { BlockQuoteNode } from '../../nodes';
import { isBlockActive } from '../../lib/helpers';

const BlockQuoteToolbar = () => {
  const editor = useSlate();
  const handleInsertBlockQuote = () => {
    const text = prompt('Enter block quote text:') || '';
    const blockquoteNode = BlockQuoteNode([{ text }]);
    editor.insertNode(blockquoteNode);
  };

  const isActive = isBlockActive(editor, 'block-quote');
  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleInsertBlockQuote}
      className={cn(
        'outline-none border-none',
        isActive ? 'bg-white text-black' : ''
      )}
    >
      <TextQuote
        size={37}
        strokeWidth={2.25}
        className='my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

export default BlockQuoteToolbar;
