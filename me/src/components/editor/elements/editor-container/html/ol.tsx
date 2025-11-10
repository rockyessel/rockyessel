'use client';
import { Children } from 'react';
import { NumberedListsType, RenderProps } from '@/components/editor/types';

const HtmlOlElement = (props: RenderProps<NumberedListsType>) => {
  const { attributes, children, element } = props;
  return (
    <ol
      className='list-decimal'
      style={{ textAlign: element.align }}
      {...attributes}
    >
      {children}
    </ol>
  );
};

export default HtmlOlElement;
