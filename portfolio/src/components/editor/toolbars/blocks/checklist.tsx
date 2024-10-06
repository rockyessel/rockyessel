'use client';

import { useSlate } from 'slate-react';
import { ListTodo } from 'lucide-react';
import { cn } from '@/lib/utils/helpers';
import { isBlockActive } from '../../lib/helpers';
import { Editor, Element, Range, Transforms } from 'slate';
import { checklistContainerNode, CheckListNode } from '../../nodes';

const BlockChecklistToolbar = () => {
  const editor = useSlate();

  const isContainerActive = isBlockActive(editor, 'check-list-container');
  const isChecklistActive = isBlockActive(editor, 'check-list');

  const handleInsertChecklist = () => {
    Editor.withoutNormalizing(editor, () => {
      if (!isContainerActive && !isChecklistActive) {
        const { selection } = editor;
        if (selection && Range.isCollapsed(selection)) {
          Transforms.insertNodes(editor, checklistContainerNode());
        }
      } else if (isContainerActive) {
        const [containerEntry] = Editor.nodes(editor, {
          match: (n) => Element.isElement(n) && n.type === 'check-list-container'});

        if (containerEntry) {
          const [, containerPath] = containerEntry;
          const checklist = CheckListNode(false);
          const end = Editor.end(editor, containerPath);
          Transforms.insertNodes(editor, checklist, { at: end });
        }
      }
    });
  };

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleInsertChecklist}
      className={cn(
        'outline-none border-none',
        isContainerActive ? 'rounded-md text-lime-600 bg-neutral-800 border border-zinc-700/40' : ''
      )}
    >
      <ListTodo
        size={37}
        strokeWidth={2.25}
        className='my-auto hover:bg-neutral-800 p-2 rounded-lg cursor-pointer'
      />
    </button>
  );
};

export default BlockChecklistToolbar;
