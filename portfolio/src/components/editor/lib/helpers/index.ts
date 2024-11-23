// 'use client';

import { Element } from 'slate';
import { Descendant, Editor } from 'slate';
import { emptyParagraph } from '../constants';
import { Node, Text, Transforms } from 'slate';
import { isListType } from '../../plugins/with-lists';
import {
  Alignment,
  BulletedListsType,
  ElementNodeType,
  LeafTypes,
  ElementTypes,
  NumberedListsType,
  NodeText,
  LinkType,
  TOCHeaderType,
  StackItemType,
  KaTeXInlineType,
} from '../../types';

export const markEvents = (editor: Editor) => {
  const isMarkActive = (mark: LeafTypes) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => isTextWithMark(n, mark),
    });
    return !!match;
  };

  const hasMarks = (node: Text): boolean => {
    // @ts-ignore
    return !!(node.bold || node.italic || node.code);
  };

  const toggleMark = (mark: LeafTypes) => {
    const isActive = isMarkActive(mark);
    Transforms.setNodes(
      editor,
      { [mark]: isActive ? undefined : true },
      { match: (n) => Text.isText(n), split: true }
    );
  };

  const isTextWithMark = (node: Node, mark: LeafTypes): boolean => {
    if (!Text.isText(node)) {
      return false;
    }
    // @ts-ignore
    return !!node[mark];
  };

  const events = {
    toggleMark,
    isMarkActive,
    isTextWithMark,
    hasMarks,
  };
  return events;
};

const isBlockNode = (node: Node): node is ElementNodeType => {
  return Element.isElement(node) && node.nodeType === 'block';
};

export const isBlockActive = (editor: Editor, format: ElementTypes) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && n.type === format,
  });
  return !!match;
};

export const toggleBlock = (
  editor: Editor,
  type: ElementTypes,
  align?: Alignment
) => {
  const isActive = isBlockActive(editor, type);
  const isList = isListType(type);

  Editor.withoutNormalizing(editor, () => {
    Transforms.setNodes(
      editor,
      {
        type: isActive ? 'paragraph' : isList ? 'list' : type,
        align: isActive && align ? align : undefined,
      },
      { match: (n) => isBlockNode(n) }
    );

    if (isList && !isActive) {
      const block: BulletedListsType | NumberedListsType = {
        type,
        align,
        children: [],
        nodeType: 'block',
      };
      Transforms.wrapNodes(editor, block);
    }
  });
};

/**
 * Checks if the given string is a valid URL.
 * @param str - The string to check.
 * @returns True if the string is a valid URL, false otherwise.
 */
export const isValidURL = (str: string): boolean => {
  if (typeof str !== 'string') {
    return false;
  }

  const pattern = new RegExp(
    '^https?:\\/\\/' + // protocol
      '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.?)+[a-zA-Z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-zA-Z\\d_]*)?$',
    'i' // fragment locator
  );
  return !!pattern.test(str);
};

export const isWeakValidURL = (str: string): boolean => {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (e) {
    return false;
  }
};

export const isElementNode = (node: Descendant): node is ElementNodeType => {
  return Element.isElement(node);
};

export const isNodeText = (node: Descendant): node is NodeText => {
  return !isElementNode(node) && !isNodeLink(node) && Node.isNode(node);
};

export const isNodeLink = (node: Text): node is LinkType => {
  return isElementNode(node) && node.type === 'link';
};

export const isNodeKatex = (node: Text): node is KaTeXInlineType => {
  return isElementNode(node) && node.type === 'katex-inline';
};

export const descendant = (
  value: string | Descendant[] | undefined
): Descendant[] => {
  if (typeof value === 'string') {
    const parsedDescendant: Descendant[] = JSON.parse(value);
    return parsedDescendant;
  }

  if (typeof value === 'undefined') {
    return emptyParagraph;
  }

  return value;
};

export const descendantToText = (fragments: Descendant[]) => {
  let text = '';

  const extractTextFromChildren = (children: Text[]) => {
    return children
      .map((child) => {
        // If the child is a text node, return the text
        if (isNodeText(child)) {
          return child.text?.trim();
        }
        if (isNodeLink(child)) {
          // If the child is a link, return only the link's children text
          console.log('joined mkf');
          return child.children
            .map((linkChild) => isNodeText(linkChild) && linkChild.text?.trim())
            .join(' ');
        }
        console.log('skipped');
        return '';
      })
      .join(' ');
  };

  fragments.forEach((fragment) => {
    if (isElementNode(fragment)) {
      const { type, children } = fragment;

      // Skip unwanted types
      if (['image', 'code', 'table'].includes(type)) return;

      // Structure based on type
      switch (type) {
        case 'heading-one':
        case 'heading-two':
        case 'heading-three':
        case 'heading-four':
        case 'heading-five':
        case 'heading-six':
          // Extract and format heading text, ignoring link URLs
          text += `${extractTextFromChildren(children)}\n\n`;
          break;

        case 'paragraph':
          // Extract and format paragraph text, ignoring link URLs
          text += `${extractTextFromChildren(children)}\n\n`;
          break;

        case 'block-quote':
          // Format block quotes with indentation
          text += `Quote: "${extractTextFromChildren(children)}"\n\n`;
          break;

        case 'numbered-lists':
          // Correctly format numbered lists
          children.forEach((item, index) => {
            const listItemText = extractTextFromChildren(item.children);
            if (listItemText) {
              text += `${index + 1}. ${listItemText}\n`;
            }
          });
          text += `\n`; // Ensure spacing after list
          break;

        case 'bulleted-lists':
          // Correctly format bulleted lists
          children.forEach((item) => {
            const listItemText = extractTextFromChildren(item.children);
            if (listItemText) {
              text += `- ${listItemText}\n`;
            }
          });
          text += `\n`; // Ensure spacing after list
          break;

        default:
          break;
      }
    }
  });

  return text?.trim(); // Trim any extra spaces at the end
};

const headingLevelMap: { [key: string]: number } = {
  'heading-one': 1,
  'heading-two': 2,
  'heading-three': 3,
  'heading-four': 4,
  'heading-five': 5,
  'heading-six': 6,
};

function extractTextFromNode(node: any): string {
  if (isNodeText(node)) {
    return node.text.trim();
  }
  if (isElementNode(node) && node.children) {
    return node.children.map(extractTextFromNode).join('').trim();
  }
  return '';
}

export const generateTOC = (descendants: Descendant[]) => {
  const toc: TOCHeaderType[] = [];
  const stack: StackItemType[] = [];

  function processNode(node: any) {
    if (isElementNode(node)) {
      if (node.type.startsWith('heading-')) {
        const headerLevel = headingLevelMap[node.type];
        const headerText = extractTextFromNode(node);

        if (headerText && headerLevel) {
          const newHeader: TOCHeaderType = {
            text: headerText,
            children: [],
          };

          while (stack.length && stack[stack.length - 1].level >= headerLevel) {
            stack.pop();
          }

          if (stack.length === 0) {
            toc.push(newHeader);
          } else {
            stack[stack.length - 1].header.children.push(newHeader);
          }

          stack.push({ level: headerLevel, header: newHeader });
        }
      }

      // Recursively process children
      node.children.forEach(processNode);
    }
  }

  descendants.forEach(processNode);

  return toc;
};

function countWordsInText(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export const countWordsInStructure = (structure: any): number => {
  let totalWords = 0;

  if (typeof structure === 'string') {
    totalWords += countWordsInText(structure);
  } else if (Array.isArray(structure)) {
    for (const item of structure) {
      totalWords += countWordsInStructure(item);
    }
  } else if (typeof structure === 'object' && structure !== null) {
    for (const key in structure) {
      if (structure.hasOwnProperty(key)) {
        totalWords += countWordsInStructure(structure[key]);
      }
    }
  }

  return totalWords;
};
