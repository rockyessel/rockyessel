'use client';

import React from 'react';
import { useSlate } from 'slate-react';
import { Text, Transforms } from 'slate';
import { RemoveFormatting } from 'lucide-react';
import { MARKS_STATE } from '../../lib/constants';

const ClearFormatOpTool = () => {
  const editor = useSlate();

  const handleClearSelectedFormatting = () => {
    // Clear formatting for selected text
    Transforms.setNodes(
      editor,
      { ...MARKS_STATE },
      { match: (n) => Text.isText(n), split: true }
    );
  };

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClearSelectedFormatting}
      className='outline-none border-none'
    >
      <RemoveFormatting
        size={32}
        strokeWidth={2.25}
        className='my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

export default ClearFormatOpTool;
