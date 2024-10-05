import { Editor, Transforms, Element, Node, Range, Point } from 'slate';
import { ParagraphNode } from '../nodes';


const isInCodeBlock = (editor: Editor) => {
  // Find nodes in the editor that match the condition (being a code block)
  const [match] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && n.type === 'code-block',
  });
  return !!match; // Return true if a code block is found
};

export const withCodeBlock = (editor: Editor): Editor => {
  // Save the original methods of the editor to override later
  const { insertBreak, deleteBackward, onKeyDown } = editor;

  // Override the insertBreak method to customize Enter key behavior
  //   editor.insertBreak = () => {
  //     if (isInCodeBlock(editor)) {
  //       const { selection } = editor;
  //       if (selection) {
  //         // Find the current code block node
  //         const [match] = Editor.nodes(editor, {
  //           match: (n) => Element.isElement(n) && n.type === 'code-block',
  //         });

  //         if (match) {
  //           const [node, path] = match;
  //           const text = Node.string(node);
  //           const isCursorAtEnd = Editor.isEnd(editor, selection.anchor, path);
  //           //    const offset = Editor.offset(editor, selection.anchor, path);

  //           // Handle Enter key within the code block
  //           if (text !== '') {
  //             Transforms.insertText(editor, '\n');
  //             return;
  //           }

  //           console.log('isCursorAtEnd: ', isCursorAtEnd);

  //           // Check if the cursor is at the end of the code block
  //           if (isCursorAtEnd) {
  //             // Insert a new paragraph node and move the cursor out of the code block
  //             const paragraph = ParagraphNode();
  //             Transforms.insertNodes(editor, paragraph);
  //             Transforms.move(editor);
  //             return;
  //           }
  //         }
  //       }
  //     } else {
  //       // Use the default insertBreak method if not in a code block
  //       insertBreak();
  //     }
  //   };

  // Override the insertBreak method to customize Enter key behavior
  editor.insertBreak = () => {
    if (isInCodeBlock(editor)) {
      Transforms.insertText(editor, '\n');
      return;
    }
    insertBreak();
  };

  // Override the deleteBackward method to customize Backspace key behavior
  editor.deleteBackward = (...args) => {
    if (isInCodeBlock(editor)) {
      const { selection } = editor;
      if (selection && Range.isCollapsed(selection)) {
        // Find the current code block node
        const [match] = Editor.nodes(editor, {
          match: (n) => Element.isElement(n) && n.type === 'code-block',
        });

        if (match) {
          const [, path] = match;
          const start = Editor.start(editor, path);

          // Prevent deleting the code block by backspace at the start
          if (Point.equals(selection.anchor, start)) {
            return;
          }
        }
      }
    }

    // Use the default deleteBackward method if not in a code block
    deleteBackward(...args);
  };

  // Add custom keydown event handling for Ctrl + Enter
  editor.onKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
      console.log('here it is working');

      if (isInCodeBlock(editor)) {
        const paragraph = ParagraphNode();
        Transforms.insertNodes(editor, paragraph);
        event.preventDefault();
      }
    }

    // Call the original onKeyDown method if it exists
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return editor; // Return the enhanced editor
};
