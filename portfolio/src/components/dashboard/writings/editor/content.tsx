'use client';

import EditableTitle from '@/components/common/editable-title';
import { TextEditor } from '@/components/editor';

interface Props {
  article: any;
}

const WritingContent = ({ article }: Props) => {
  return (
    <div>
      <EditableTitle
        className='text-3xl'
        defaultValue={article?.title ?? ''}
        onChange={(value) => {
          console.log('editable-title', value);
        }}
        placeholder='Click to add a title'
      />

      <TextEditor
        className='text-lg'
        locale={'en'}
        onChange={(values) => console.log('values: ', values)}
        toolbar={{
          className:
            'sticky top-16 bg-neutral-900 w-full px-2 rounded-lg border border-zinc-700/40 z-[10]',
        }}
      />
    </div>
  );
};

export default WritingContent;
