'use client';

import React from 'react';
import { Editor, Element, Node, Range, Transforms } from 'slate';
import { useSlateStatic } from 'slate-react';
import { LinkNode } from '../nodes';
import { LinkProps } from '../types';

interface Props {
  unlink: (editor: Editor) => void;
  isLinkActive: (editor: Editor) => boolean;
  insertLink: (editor: Editor, href: string, text?: string) => void;
  toggleLink: (editor: Editor, showLinkInput: () => void) => void;
  isSelectionLink: (editor: Editor) => boolean;
  isSelectionLinkEnd: (editor: Editor) => boolean;
  isSelectionLinkBody: (editor: Editor) => boolean;
  atEnd: (editor: Editor) => boolean;
}

export const useLink = () => {
  const insertLink = (editor: Editor, href: string, text?: string) => {
    const linkProps: LinkProps = { href, rel: 'noopener', target: '_blank' };
    const linkNode = LinkNode(linkProps, text);
    Transforms.insertNodes(editor, linkNode);
  };

  const isLinkActive = (editor: Editor) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === 'link',
    });
    return !!match;
  };

  const unlink = (editor: Editor) => {
    Transforms.unwrapNodes(editor, {
      match: (n) => Element.isElement(n) && n.type === 'link',
      split: true,
    });
  };

  const toggleLink = (editor: Editor, showLinkInput: () => void) => {
    if (isLinkActive(editor)) {
      unlink(editor);
    } else {
      if (editor.selection && Range.isExpanded(editor.selection)) {
        showLinkInput();
      }
    }
  };

  /**
   * Checks if the selection is at the end.
   *
   * @param {Object} editor Editor in which the selection is made
   * @returns The selection is at end or not
   */
  const atEnd = (editor: Editor) => {
    // @ts-ignore
    const textLength = Node.get(editor, editor?.selection?.focus.path).text
      .length;
    // @ts-ignore
    return textLength === editor.selection.focus.offset;
  };

  const isSelectionLinkEnd = (editor: Editor) =>
    isSelectionLink(editor) && atEnd(editor);

  const isSelectionLinkBody = (editor: Editor) =>
    isSelectionLink(editor) &&
    !atEnd(editor) &&
    // @ts-ignore
    Range.isCollapsed(editor.selection);

  const isSelectionLink = (editor: Editor): boolean =>
    // @ts-ignore
    Node.parent(editor, editor?.selection?.focus.path).type === 'link';

  const handlers: Props = {
    atEnd,
    unlink,
    toggleLink,
    insertLink,
    isLinkActive,
    isSelectionLink,
    isSelectionLinkBody,
    isSelectionLinkEnd,
  };

  return handlers;
};
