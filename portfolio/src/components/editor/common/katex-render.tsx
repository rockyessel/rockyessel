import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface Props {
  expression: string;
}

const KaTeXRenderer = ({ expression }: Props) => {
  let html = '';

  try {
    html = katex.renderToString(expression, {
      throwOnError: false,
    });
  } catch (error) {
    console.error('KaTeX rendering error:', error);
  }

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default KaTeXRenderer;
