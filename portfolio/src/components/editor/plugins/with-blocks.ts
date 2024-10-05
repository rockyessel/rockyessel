import { Editor, Element, Range, Text, Transforms } from "slate";
import { markEvents } from "../lib/helpers";


  const getBlockAbove = (editor: Editor) => {
    return Editor.above<Element>(editor, {
      // @ts-ignore
      match: (n) => Editor.isBlock(editor, n),
    });
  };

export const withBlocks = (editor: Editor) => {
  const { normalizeNode, deleteBackward } = editor;

  const {hasMarks}= markEvents(editor)

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;


    // Remove formatting from code blocks

    if (Element.isElement(node) && node.type === "code-block") {
      // Has text with marks
      const [match] = Editor.nodes(editor, {
        at: path,
        match: (n) => Text.isText(n) && hasMarks(n),
        mode: "lowest",
      });

      if (match) {
        // Remove marks from text
        Transforms.setNodes(
          editor,
          { bold: undefined, italic: undefined, code: undefined },
          { at: path, match: (n) => Text.isText(n), mode: "lowest" }
        );
        return;
      }
    }

    normalizeNode(entry);
  };

  editor.deleteBackward = (unit) => {

    // Pressing backspace on an empty block (heading, code block, quote) block should turn it into a paragraph block

    if (editor.selection && Range.isCollapsed(editor.selection)) {
      const entry = getBlockAbove(editor);

      if (entry) {
        const [node, path] = entry;

        if (
          (node.type === "code-block" ||
            node.type === "heading-one" ||
            node.type === "heading-two" ||
            node.type === "heading-three" ||
            node.type === "heading-four" ||
            node.type === "heading-five" ||
            node.type === "heading-six" ||
            node.type === "block-quote") &&
          Editor.isEmpty(editor, node)
        ) {
          // Turn into paragraph
          Transforms.setNodes(
            editor,
            {
              type: "paragraph",
            },
            {
              at: path,
            }
          );

          return;
        }
      }
    }

    deleteBackward(unit);
  };

  return editor;
};
