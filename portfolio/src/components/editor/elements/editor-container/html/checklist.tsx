'use client';

import { cn } from '@/lib/utils/helpers';
import { Editor, Transforms } from 'slate';
import { Input } from '@/components/ui/input';
import { ReactEditor, useSlate, useReadOnly } from 'slate-react';
import { CheckListType, RenderProps } from '@/components/editor/types';

const HtmlChecklistElement = (props: RenderProps<CheckListType>) => {
  const { attributes, children, element } = props;
  const editor = useSlate();
  const readOnly = useReadOnly();

  const handleToggleCheck = () => {
    const path = ReactEditor.findPath(editor, element);
    toggleChecklistItem(editor, path);
  };

  const toggleChecklistItem = (editor: Editor, path: number[]) => {
    const newChecked = !element.checked;
    Transforms.setNodes(editor, { checked: newChecked }, { at: path });
  };

  return (
    <span {...attributes} className='inline-flex items-start gap-2'>
      <input
        className='mt-2.5 border-none outline-none'
        type='checkbox'
        checked={element.checked}
        readOnly={false}
        onChange={handleToggleCheck}
      />

      <span
        contentEditable={!readOnly}
        className={cn('mt-1', element.checked ? 'line-through' : '')}
      >
        {children}
      </span>
    </span>
  );
};

export default HtmlChecklistElement;
