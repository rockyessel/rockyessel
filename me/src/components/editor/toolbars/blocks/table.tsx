'use client';

import { Grid2X2, Table } from 'lucide-react';
import { useSlate } from 'slate-react';
import { isBlockActive } from '../../lib/helpers';
import { cn } from '@/lib/utils/helpers';
import { TableNode } from '../../nodes';

const BlockTableToolbar = () => {
  const editor = useSlate();
    const isActive = isBlockActive(editor, 'table');
    

  const handleAddTable = async () => {
    const input = prompt('Enter table size (rows x columns):', '3 x 3');
    if (input) {
      const [rows, cols] = input.split('x').map(Number);
      if (rows > 0 && cols > 0) {
        // Use your TableNode function to create the table
        const table = TableNode(rows, cols);

        // Insert the table into the Slate editor
        editor.insertNode(table);
      } else {
        alert('Please enter valid positive numbers for rows and columns.');
      }
    }
  };

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleAddTable}
      className={cn('outline-none border-none', isActive ? 'rounded-md text-lime-600 bg-neutral-800 border border-zinc-700/40' : '')}
    >
      <Grid2X2
        size={37}
        strokeWidth={2.25}
        className='my-auto hover:bg-neutral-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

export default BlockTableToolbar;
