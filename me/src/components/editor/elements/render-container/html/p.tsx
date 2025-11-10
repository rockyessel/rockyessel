'use client';

import { ParagraphType, RenderProps } from '@/components/editor/types';

const HtmlPElementRender = (props: RenderProps<ParagraphType>) => {
  const { attributes, children, element } = props;

  return <p>{children}</p>;
};

export default HtmlPElementRender;
