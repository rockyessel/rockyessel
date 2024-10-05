'use client';

import { ParagraphType, RenderProps } from '@/components/editor/types';

const HtmlPElement = (props: RenderProps<ParagraphType>) => {
  const { attributes, children } = props;

  return (
    <p  className='relative' {...attributes}>
      {children}
    </p>
  );
};

export default HtmlPElement;
