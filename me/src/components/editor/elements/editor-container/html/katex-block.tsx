'use client';

import KaTeXRenderer from '@/components/editor/common/katex-render';
import { KaTeXBlockType, RenderProps } from '@/components/editor/types';

const HtmlKatexBlockElement = (props: RenderProps<KaTeXBlockType>) => {
  const { attributes, children, element } = props;

  return (
    <div className='relative' {...attributes}>
      <KaTeXRenderer expression={element.expression} />
      {children}
    </div>
  );
};

export default HtmlKatexBlockElement;
