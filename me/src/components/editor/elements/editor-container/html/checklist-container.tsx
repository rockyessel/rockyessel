'use client';

import { ReactEditor, useSlate, useReadOnly } from 'slate-react';
import { CheckListContainerType, RenderProps } from '@/components/editor/types';

const HtmlChecklistContainerElement = (
  props: RenderProps<CheckListContainerType>
) => {
  const { attributes, children, element } = props;
  const editor = useSlate();

  return (
    <div className='my-4 inline-flex flex-col gap-1.5' {...attributes}>
      {children}
    </div>
  );
};

export default HtmlChecklistContainerElement;
