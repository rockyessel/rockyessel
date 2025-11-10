'use client';

import React from 'react';
import { Braces } from 'lucide-react';
import { useSlate } from 'slate-react';
import { cn } from '@/lib/utils/helpers';
import { CodeBlockNode } from '../../nodes';
import { isBlockActive } from '../../lib/helpers';
import { DEFAULT_CODE } from '../../lib/constants';

const BlockCodeToolbar = () => {
  const editor = useSlate();

  const handleInsertCodeBlock = () => {
    const codeBlockNode = CodeBlockNode('', { ...DEFAULT_CODE });
    editor.insertNode(codeBlockNode);
  };
  const isActive = isBlockActive(editor, 'code-block');

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleInsertCodeBlock}
      className={cn(
        'outline-none border-none',
        isActive ? 'rounded-md text-lime-600 bg-neutral-800 border border-zinc-700/40' : ''
      )}
    >
      
      <Braces
        size={37}
        strokeWidth={2.25}
        className='my-auto hover:bg-neutral-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

export default BlockCodeToolbar;
