import { Editor, Element, Path, Transforms } from 'slate';

export const withSeparator = (editor: Editor) => {
  const { isVoid, normalizeNode } = editor;

  editor.isVoid = (element) => {
    return element.type === 'separator' ? true : isVoid(element);
  };

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    // No two separators next to one another, remove the second one

    if (Element.isElement(node) && node.type === 'separator') {
      const [previousNode] = Editor.node(editor, Path.previous(path));

      if (
        Element.isElement(previousNode) &&
        previousNode.type === 'separator'
      ) {
        Transforms.removeNodes(editor, { at: path });
        return;
      }

      const [nextNode, nextPath] = Editor.node(editor, Path.next(path));

      if (Element.isElement(nextNode) && nextNode.type === 'separator') {
        Transforms.removeNodes(editor, { at: nextPath });
        return;
      }
    }

    normalizeNode(entry);
  };

  return editor;
};
