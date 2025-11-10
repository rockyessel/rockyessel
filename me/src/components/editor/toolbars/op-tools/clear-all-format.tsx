'use client';

import React from 'react';
import { useSlate } from 'slate-react';
import { Node, Transforms } from 'slate';
import { CircleSlash2 } from 'lucide-react';
import { MARKS_STATE } from '../../lib/constants';

const ClearAllFormatOpTool = () => {
  const editor = useSlate();

  const handleClearAllFormatting = () => {
    // Iterate through all text nodes in the editor
    for (const [node, path] of Node.texts(editor)) {
      console.log('node: ', node);
      // Set the node marks to false to clear formatting
      Transforms.setNodes(
        editor,
        { ...MARKS_STATE },
        { at: path } // Apply changes at the specific path of the node
      );
    }
  };
  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClearAllFormatting}
      className='outline-none border-none'
    >
      <CircleSlash2
        size={32}
        strokeWidth={2.25}
        className='my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};
export default ClearAllFormatOpTool;
