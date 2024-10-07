'use client';

import { Descendant } from 'slate';
import { cn } from '@/lib/utils/helpers';
import { PostKeyType, PostType } from '@/types';
import { TextEditor } from '@/components/editor';
import EditableTitle from '@/components/common/editable-title';

interface Props {
  post: PostType;
  updatePost: <K extends PostKeyType>(key: K, values: PostType[K]) => void;
  visible: boolean;
}

const WritingContent = ({ ...props }: Props) => {
  const { post, updatePost, visible } = props;

  const onChange = (value: Descendant[]) => {
    updatePost('content', JSON.stringify(value));
  };

  return (
    <div>
      <EditableTitle
        className='text-3xl'
        defaultValue={post?.title ?? ''}
        onChange={(value) => {
          updatePost('title', value);
        }}
        placeholder='Click to add a title'
      />

      <TextEditor
        className='text-lg'
        locale={'en'}
        onChange={onChange}
        content={post?.content}
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
