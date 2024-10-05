'use client';

import { useSlate } from 'slate-react';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils/helpers';
import { isBlockActive } from '../../lib/helpers';
import { ImageNode, ParagraphNode } from '../../nodes';

const BlockImageToolbar = () => {
  const editor = useSlate();

  const handleInsertImage = () => {
    const src = prompt('Enter the image URL:') || '';
    const alt = prompt('Enter the image description:') || '';
    const imageNode = ImageNode(src, alt);
    if (src && alt) {
      editor.insertNode(imageNode);
      const paragraph = ParagraphNode();
      editor.insertNode(paragraph);
      editor.move();
    }
  };
  const isActive = isBlockActive(editor, 'image');

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleInsertImage}
      className={cn(
        'outline-none border-none',
        isActive ? 'bg-white text-black' : ''
      )}
    >
      <ImageIcon
        size={37}
        strokeWidth={2.25}
        className='my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

export default BlockImageToolbar;
