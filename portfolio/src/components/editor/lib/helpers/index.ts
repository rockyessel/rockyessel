'use client';

import { Descendant, Editor, NodeEntry } from 'slate';
import { Node, Text, Transforms } from 'slate';
import {
  Alignment,
  BulletedListsType,
  ElementNodeType,
  LeafTypes,
  ElementTypes,
  NumberedListsType,
  NodeText,
  LinkType,
} from '../../types';
import { Element } from 'slate';
import { Range } from 'slate';
import { isListType } from '../../plugins/with-lists';
import { emptyParagraph } from '../constants';

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

export const isElementNode = (node: Descendant): node is ElementNodeType => {
  return Element.isElement(node);
};

export const isNodeText = (node: Descendant): node is NodeText => {
  return !isElementNode(node) && !isNodeLink(node) && Node.isNode(node);
};

export const isNodeLink = (node: Text): node is LinkType => {
  return isElementNode(node) && node.type === 'link';
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