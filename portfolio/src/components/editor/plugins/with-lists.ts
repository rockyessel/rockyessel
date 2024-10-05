import { Editor, Element, Node, Path, Point, Range, Transforms } from "slate";
import { ElementTypes } from "../types";

const getBlockAbove = (editor: Editor) => {
  return Editor.above<Element>(editor, {
    // @ts-ignore
    match: (n) => Editor.isBlock(editor, n),
  });
};

export const isListType = (
  type: ElementTypes
): type is "bulleted-lists" | "numbered-lists" => {
  return type === "bulleted-lists" || type === "numbered-lists";
};

export const withLists = (editor: Editor) => {
  const { insertBreak, deleteBackward, normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    if (Element.isElement(node)) {
      if (node.type === "list") {
        const parent = Node.parent(editor, path);
        if (!Element.isElement(parent) || !isListType(parent.type)) {
          Transforms.removeNodes(editor, { at: path });
          return;
        }
      }

      if (node.type === "bulleted-lists" || node.type === "numbered-lists") {
        if (Editor.isEmpty(editor, node)) {
          Transforms.removeNodes(editor, { at: path });
          return;
        }

        for (const [child, childPath] of Node.children(editor, path)) {
          if (Element.isElement(child) && child.type !== "list") {
            Transforms.liftNodes(editor, { at: childPath });
            return;
          }
        }

        try {
          const [previousNode] = Editor.node(editor, Path.previous(path));

          if (
            Element.isElement(previousNode) &&
            previousNode.type === node.type
          ) {
            Transforms.mergeNodes(editor, { at: path });
            return;
          }
        } catch (e) {}

        try {
          const [nextNode, nextPath] = Editor.node(editor, Path.next(path));

          if (Element.isElement(nextNode) && nextNode.type === node.type) {
            Transforms.mergeNodes(editor, { at: nextPath });
            return;
          }
        } catch (e) {}
      }
    }

    normalizeNode(entry);
  };

  editor.insertBreak = () => {
    if (editor.selection && Range.isCollapsed(editor.selection)) {
      const entry = getBlockAbove(editor);

      if (entry) {
        const [node, path] = entry;

        if (node.type === "list" && Editor.isEmpty(editor, node)) {
          Transforms.setNodes(
            editor,
            {
              type: "paragraph",
            },
            {
              at: path,
            }
          );
          return true;
        }
      }
    }
    insertBreak();
  };

  editor.deleteBackward = (unit) => {
    if (editor.selection && Range.isCollapsed(editor.selection)) {
      const entry = getBlockAbove(editor);

      if (entry) {
        const [node, path] = entry;

        if (
          node.type === "list" &&
          Point.equals(editor.selection.anchor, Editor.start(editor, path))
        ) {
          Transforms.setNodes(editor, { type: "paragraph" }, { at: path });
          return;
        }
      }
    }

    deleteBackward(unit);
  };

  return editor;
};
