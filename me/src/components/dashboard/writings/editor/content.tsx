'use client';

import { Descendant } from 'slate';
import { cn } from '@/lib/utils/helpers';
import { PostDraftKeyType, PostDraftType } from '@/types';
import { TextEditor } from '@/components/editor';
import EditableTitle from '@/components/common/editable-title';

interface Props {
  draft: PostDraftType;
  updateDraft: <K extends PostDraftKeyType>(
    key: K,
    values: PostDraftType[K]
  ) => void;
  visible: boolean;
}

const WritingContent = ({ ...props }: Props) => {
  const { draft, updateDraft, visible } = props;

  const onChange = (value: Descendant[]) => {
    updateDraft('content', value);
  };

  return (
    <div>
      <EditableTitle
        className='text-3xl'
        defaultValue={draft?.title ?? ''}
        onChange={(value) => {
          updateDraft('title', value);
        }}
        placeholder='Click to add a title'
      />

      <TextEditor
        className='text-lg'
        locale={'en'}
        onChange={onChange}
        content={draft?.content}
        toolbar={{
          className: cn(
            visible ? 'top-16' : 'top-0',
            'sticky bg-neutral-900 w-full px-2 rounded-lg border border-zinc-700/40 z-[10]'
          ),
        }}
      />
    </div>
  );
};

export default WritingContent;
