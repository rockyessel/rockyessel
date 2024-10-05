'use client';

import RenderHtmlElements from './html';
import RenderMarkElements from './leaf';

const RenderHTMLContainers = () => {
  const leafs = RenderMarkElements;
  const elements = RenderHtmlElements;

  return { leafs, elements };
};

export default RenderHTMLContainers;
