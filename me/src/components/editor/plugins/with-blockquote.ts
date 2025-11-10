'use client';

import { Editor, Transforms, Element, Range } from 'slate';
import { ParagraphNode } from '../nodes'; 

const isInBlockquote = (editor: Editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && n.type === 'block-quote',
  });
  return !!match;
};

export const withBlockquote = (editor: Editor): Editor => {
  const { insertBreak, onKeyDown, deleteBackward } = editor;

  editor.insertBreak = () => {
    if (isInBlockquote(editor)) {
      const { selection } = editor;
      console.log('blockquote-selection: ', selection);
      if (selection && Range.isCollapsed(selection)) {
        const [blockquote] = Editor.nodes(editor, {
          match: (n) => Element.isElement(n) && n.type === 'block-quote',
        });

        if (blockquote) {
          const [, path] = blockquote;
          const end = Editor.end(editor, path);

          // If the cursor is at the end of the blockquote, exit the blockquote
          if (Range.includes(selection, end)) {
            const paragraph = ParagraphNode();
            Transforms.insertNodes(editor, paragraph);
            Transforms.move(editor);
            return;
          }
        }
      }
    }

    insertBreak();
  };

  // Add custom keydown event handling for Ctrl + Enter
  editor.onKeyDown = (event) => {
    if (isInBlockquote(editor)) {
      if (event.ctrlKey && event.key === 'Enter') {
        console.log('here it is working');
        const paragraph = ParagraphNode();
        Transforms.insertNodes(editor, paragraph);
        Transforms.move(editor);
        event.preventDefault();
      }

      if (event.ctrlKey && event.key === 'q') {
        console.log('blockquote');
        toggleBlockquote(editor);
        event.preventDefault();
      }

      // Call the original onKeyDown method if it exists
      if (onKeyDown) {
        onKeyDown(event);
      }
    }
  };

  editor.deleteBackward = (...args) => {
    if (isInBlockquote(editor)) {
      const { selection } = editor;
      if (selection && Range.isCollapsed(selection)) {
        const [blockquoteEntry] = Editor.nodes(editor, {
          match: (n) => Element.isElement(n) && n.type === 'block-quote',
        });

        if (blockquoteEntry) {
          const [, blockquotePath] = blockquoteEntry;
          const { anchor } = selection;

          const isAtNodeStart = Editor.isStart(editor, anchor, blockquotePath);
          const text = Editor.string(editor, blockquotePath);

          // Check if the cursor is at the start of the blockquote and it's empty
          if (isAtNodeStart && text === '') {
            // Remove the blockquote from the editor
            Transforms.removeNodes(editor, { at: blockquotePath });
            return;
          }
        }
      }
    }

    deleteBackward(...args);
  };

  return editor;
};

export const toggleBlockquote = (editor: Editor) => {
  const isActive = isInBlockquote(editor);

  Transforms.setNodes(
    editor,
    { type: isActive ? 'paragraph' : 'block-quote' },
    { match: (n) => Element.isElement(n) }
  );
};
