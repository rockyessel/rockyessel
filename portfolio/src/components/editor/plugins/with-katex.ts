import { Transforms, Editor, Node, Element } from 'slate';
import { isElementNode } from '../lib/helpers';

export const withKaTeX = (editor: Editor) => {
  const { isInline, isVoid, insertText } = editor;

  // Define 'katex-inline' as an inline element
  editor.isInline = (element) =>
    element.type === 'katex-inline' ? true : isInline(element);

  // Define 'katex-block' as a void block element
  editor.isVoid = (element) =>
    element.type === 'katex-block' ? true : isVoid(element);

  // Insert `$$` to toggle between text and block math expressions
  editor.insertText = (text) => {
    if (text === '$' && editor.selection) {
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          Element.isElement(n) &&
          (n.type === 'katex-inline' || n.type === 'katex-block'),
      });

      // Toggle KaTeX node or insert text
      if (match) {
        Transforms.unwrapNodes(editor, {
          match: (n) =>
            Element.isElement(n) &&
            (n.type === 'katex-inline' || n.type === 'katex-block'),
        });
      } else {
        // Insert a new inline KaTeX element
        Transforms.insertNodes(editor, {
          nodeType: 'void',
          type: 'katex-inline',
          expression: '',
          children: [{ text: '' }],
        });
      }
    } else {
      insertText(text);
    }
  };

  return editor;
};
