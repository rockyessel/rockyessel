'use client';

import { Editor } from 'slate';
import { jsx } from 'slate-hyperscript';
import { ElementTagsType, TextTagFunctionType } from '../types';
import DOMPurify from 'dompurify';
import { Descendant } from 'slate';
import { Transforms } from 'slate';

export const withHtml = (editor: Editor): Editor => {
  const { insertData, isInline, isVoid } = editor;

  editor.isInline = (element) => {
    return element.type === 'link' ? true : isInline(element);
  };

  editor.isVoid = (element) => {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    // console.log('inserted data', data);

    const htmlContent = data.getData('text/html');

    if (htmlContent) {
      const html = DOMPurify.sanitize(htmlContent);
      const fragments = htmlToSlate(html);
      // console.log('fragments => ', fragments);
      Transforms.insertFragment(editor, fragments);

      return;
    }

    insertData(data);
  };

  return editor;
};

// @ts-ignore
export const deserialize = (element: HTMLElement | ChildNode) => {
  if (element.nodeType === 3) {
    return { text: element.textContent };
  } else if (element.nodeType !== 1) {
    return null;
  } else if (element.nodeName === 'BR') {
    return { text: '\n' };
  }

  const { nodeName } = element;
  let parent: HTMLElement | ChildNode = element;

  const elChildNodes = element.childNodes[0];
  const isCode = elChildNodes?.nodeName === 'CODE';

  // console.log('elChildNodes: ', elChildNodes);

  if (nodeName === 'PRE' && elChildNodes && isCode) {
    parent = elChildNodes;
  }

  //@ts-ignore
  const children = Array.from(parent.childNodes)
    .map(deserialize)
    .flat()
    .filter((node) => {
      // console.log('node-children: ', node);
      return node !== null;
    });

  if (element.nodeName === 'BODY') {
    return jsx('fragment', {}, children);
  }

  if (ELEMENT_TAGS[nodeName]) {
    if (!isNativeElement(element)) return null;
    const attrs = ELEMENT_TAGS[nodeName](element);
    return jsx('element', attrs, children);
  }

  if (TEXT_TAGS[nodeName]) {
    const attrs = TEXT_TAGS[nodeName];
    return children.map((child: any) => {
      if (typeof child === 'string') {
        // console.log('{ text: child, ...attrs }: ', { text: child, ...attrs });
        return { text: child, ...attrs };
      }
      if (child && typeof child === 'object' && 'text' in child) {
        // console.log('{ ...child, ...attrs }: ', { ...child, ...attrs });
        return { ...child, ...attrs };
      }
      return child;
    });
  }

  return children;
};

const ELEMENT_TAGS: ElementTagsType = {
  //@ts-ignore
  A: (element: Element) => ({
    type: 'link',
    children: [{ text: element.textContent || element.getAttribute('href') }],
    nodeType: 'inline',
    props: {
      href: element.getAttribute('href') || '',
      target: element.getAttribute('target') || '_blank',
      rel: element.getAttribute('rel') || 'noopener noreferrer',
    },
  }),
  BLOCKQUOTE: () => ({ type: 'block-quote', nodeType: 'block' }),
  H1: () => ({ type: 'heading-one', nodeType: 'block' }),
  H2: () => ({ type: 'heading-two', nodeType: 'block' }),
  H3: () => ({ type: 'heading-three', nodeType: 'block' }),
  H4: () => ({ type: 'heading-four', nodeType: 'block' }),
  H5: () => ({ type: 'heading-five', nodeType: 'block' }),
  H6: () => ({ type: 'heading-six', nodeType: 'block' }),
  TABLE: () => ({ type: 'table', nodeType: 'block' }),
  TR: () => ({ type: 'table-row', nodeType: 'block' }),
  TD: () => ({ type: 'table-cell', nodeType: 'block' }),
  TH: () => ({ type: 'table-header', nodeType: 'block' }),
  HR: () => ({ type: 'separator', nodeType: 'void' }),
  IMG: (element: Element) => ({
    type: 'image',
    nodeType: 'void',
    children: [{ text: 'write something(optional)' }],
    props: {
      src: element.getAttribute('src') || '',
      alt: element.getAttribute('alt') || '',
      width: parseInt(element.getAttribute('width') || '900'),
      height: parseInt(element.getAttribute('height') || '900'),
    },
  }),
  LI: () => ({ type: 'list', nodeType: 'block' }),
  OL: () => ({ type: 'numbered-lists', nodeType: 'block' }),
  P: () => ({ type: 'paragraph', nodeType: 'block' }),
  PRE: (element: Element) => ({
    type: 'code-block',
    nodeType: 'block',
    props: {
      code: element.textContent || '',
      language: element.getAttribute('data-language') || 'javascript', // Default language
      theme: element.getAttribute('data-theme') || 'default', // Default theme
      isShowLins: true,
    },
  }),
  UL: () => ({ type: 'bulleted-lists', nodeType: 'block' }),
};

// COMPAT: `B` is omitted here because Google Docs uses `<b>` in weird ways.
const TEXT_TAGS: Record<string, TextTagFunctionType> = {
  CODE: () => ({ code: true }),
  DEL: () => ({ strikethrough: true }),
  EM: () => ({ italic: true }),
  I: () => ({ italic: true }),
  S: () => ({ strikethrough: true }),
  STRONG: () => ({ bold: true }),
  U: () => ({ underline: true }),
};

/**
 * Converts HTML string into Slate-compatible node format
 */
export const htmlToSlate = (html: string): Descendant[] => {
  // Create a DOM parser to parse the HTML string into a DOM tree
  const parser = new DOMParser();
  const document = parser.parseFromString(html, 'text/html');

  // Start deserialization from the body of the document
  return deserialize(document.body);
};

export const isNativeElement = (
  node: ChildNode | HTMLElement
): node is Element => {
  return node.nodeType === Node.ELEMENT_NODE;
};
