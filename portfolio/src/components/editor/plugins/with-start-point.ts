import { Editor, Element, Path, Transforms } from "slate";
import { ParagraphNode } from "../nodes";



export const withStartPoint = (editor: Editor) => {
    const { normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    if (entry[1].length === 0) {
      const { children } = editor;
      const lastNode = children[children.length - 1];

      if (children.length === 0 || (Element.isElement(lastNode) && lastNode.type !== "paragraph")) {
          
          
        const paragraph = ParagraphNode()
          
          
        // Insert paragraph trailing block
        const lastNodePath = Editor.last(editor, [])[1];
        Transforms.insertNodes(editor, paragraph, {
          at: children.length === 0 ? [0] : Path.next(lastNodePath.slice(0, 1)),
        });

        return;
      }
    }

    normalizeNode(entry);
  };

  return editor;
};

    // Error: Cannot get the start point in the node at path [] because it has no start text node.