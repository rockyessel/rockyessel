import { Editor, Element, Path, Transforms } from "slate";

const getBlockAbove = (editor: Editor) => {
  return Editor.above<Element>(editor, {
    // @ts-ignore
    match: (n) => Editor.isBlock(editor, n),
  });
};

export const withVoids = (editor: Editor) => {
  const { deleteBackward } = editor;

  editor.deleteBackward = (unit) => {
    //-------------------------------------------
    // Instead of deleting the void element, select it. Second time deletes it
    //-------------------------------------------
    const entry = getBlockAbove(editor);

    if (entry) {
      const [node, path] = entry;

      if (Editor.isEmpty(editor, node)) {
        try {
          const [previousNode, previousPath] = Editor.node(
            editor,
            Path.previous(path)
          );
          // @ts-ignore
          if (Editor.isVoid(editor, previousNode)) {
            Transforms.select(editor, previousPath);
            return;
          }
        } catch (e) {}
      }
    }

    deleteBackward(unit);
  };

  return editor;
};
