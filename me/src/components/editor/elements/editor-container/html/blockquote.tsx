'use client';

import { BlockQuoteType, RenderProps } from '@/components/editor/types';
import { useReadOnly } from 'slate-react';

const HtmlBlockQuoteElement = (props: RenderProps<BlockQuoteType>) => {
  const { attributes, children } = props;

  const readOnly = useReadOnly();

  return (
    <blockquote contentEditable={!readOnly} {...attributes}>
      {children}
    </blockquote>
  );
};

export default HtmlBlockQuoteElement;
