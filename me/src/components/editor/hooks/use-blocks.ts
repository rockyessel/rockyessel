"use client";

import { NodeEntry } from "slate";
import { Editor, Element, Node, Transforms } from "slate";
import { Alignment, BulletedListsType, ElementNodeType, ElementTypes, NumberedListsType } from "../types";

interface Props {
  isInBlockquote: (editor: Editor) => boolean;
  getBlockAbove: (editor: Editor) => NodeEntry<ElementNodeType> | undefined;
  isListType: (type: ElementTypes) => type is "bulleted-lists" | "numbered-lists";
  isBlockNode: (node: Node) => node is ElementNodeType;
  isBlockActive: (editor: Editor, format: ElementTypes) => boolean;
  toggleBlock: (editor: Editor, type: ElementTypes, align?: Alignment) => void;
}

export const useBlocks = () => {
  const isInBlockquote = (editor: Editor) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === "block-quote",
    });
    return !!match;
  };
  const getBlockAbove = (editor: Editor) => {
    return Editor.above<Element>(editor, {
      // @ts-ignore
      match: (n) => Editor.isBlock(editor, n),
    });
  };

  const isListType = (
    type: ElementTypes
  ): type is "bulleted-lists" | "numbered-lists" => {
    return type === "bulleted-lists" || type === "numbered-lists";
  };
  const isBlockNode = (node: Node): node is ElementNodeType => {
    return Element.isElement(node) && node.nodeType === "block";
  };

  const isBlockActive = (editor: Editor, format: ElementTypes) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === format,
    });
    return !!match;
  };

  const toggleBlock = (
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
          type: isActive ? "paragraph" : isList ? "list" : type,
          align: isActive && align ? align : undefined,
        },
        { match: (n) => isBlockNode(n) }
      );

      if (isList && !isActive) {
        const block: BulletedListsType | NumberedListsType = {
          type,
          align,
          children: [],
          nodeType: "block",
        };
        Transforms.wrapNodes(editor, block);
      }
    });
  };

  const handlers: Props = {
    isInBlockquote,
    getBlockAbove,
    isListType,
    isBlockNode,
    isBlockActive,
    toggleBlock,
  };

  return handlers;
};
