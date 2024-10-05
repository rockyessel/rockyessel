'use client';

import MarkElements from './leaf';
import EditorHtmlElements from './html';

const EditorHTMLContainers = () => {
  const leafs = MarkElements;
  const elements = EditorHtmlElements;

  return { leafs, elements };
};

export default EditorHTMLContainers;
