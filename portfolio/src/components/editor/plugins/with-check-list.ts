import { Editor, Element, Node, Path, Point, Range, Transforms } from "slate";
import { ElementTypes } from "../types";
import { CheckListNode } from "../nodes";

const getBlockAbove = (editor: Editor) => {
  return Editor.above<Element>(editor, {
    // @ts-ignore
    match: (n) => Editor.isBlock(editor, n),
  });
};

export const isChecklistType = (
  type: ElementTypes
): type is "check-list-container" => {
  return type === "check-list-container";
};

export const withChecklist = (editor: Editor) => {
  const { insertBreak, deleteBackward, normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    if (Element.isElement(node)) {
      if (node.type === "check-list") {
        const parent = Node.parent(editor, path);
        if (!Element.isElement(parent) || !isChecklistType(parent.type)) {
          Transforms.removeNodes(editor, { at: path });
          return;
        }
      }

      if (node.type === "check-list-container") {
        if (Editor.isEmpty(editor, node)) {
          Transforms.removeNodes(editor, { at: path });
          return;
        }

        for (const [child, childPath] of Node.children(editor, path)) {
          if (Element.isElement(child) && child.type !== "check-list") {
            Transforms.liftNodes(editor, { at: childPath });
            return;
          }
        }

        normalizeNode(entry);

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

    // Remove the checked field from paragraph nodes
    if (
      Element.isElement(node) &&
      node.type === "paragraph" &&
      "checked" in node &&
      node.checked !== undefined
    ) {
      const newProperties = { checked: undefined };
      Transforms.setNodes(editor, newProperties, { at: path });
    }

    normalizeNode(entry);
  };

  editor.insertBreak = () => {
    if (editor.selection && Range.isCollapsed(editor.selection)) {
      const entry = getBlockAbove(editor);

      if (entry) {
        const [node, path] = entry;

        if (node.type === "check-list") {
          if (Editor.isEmpty(editor, node)) {
            Transforms.setNodes(editor, { type: "paragraph" }, { at: path });
            return;
          } else {
            const newPath = Path.next(path);
            const checklistNode = CheckListNode(false);
            Transforms.insertNodes(editor, checklistNode, { at: newPath });
            Transforms.select(editor, Editor.start(editor, newPath));
            return;
          }
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
          node.type === "check-list" &&
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
