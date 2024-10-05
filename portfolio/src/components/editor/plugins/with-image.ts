'use client';

import { Element } from 'slate';
import { useSlate } from 'slate-react';
import { ImageNode, ParagraphNode } from '../nodes';
import { Editor, Transforms, Element as SlateElement } from 'slate';

const isInImage = (editor: Editor) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => Element.isElement(n) && n.type === 'image',
  });
  return !!match;
};

export const withImage = (editor: Editor): Editor => {
  const { insertData, isVoid, deleteBackward, insertBreak } = editor;

  editor.isVoid = (element) => {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    if (isInImage(editor)) {
      const text = data.getData('text/plain');

      console.log('text: ', text);
      const { files } = data;

      console.log('files: ', files);

      if (files && files.length > 0) {
        const reader = new FileReader();
        const [file] = files;

        reader.addEventListener('load', () => {
          const url = reader.result as string;
          console.log('image-url: ', url);
          insertImage(editor, url, '');
        });

        reader.readAsDataURL(file);
      } else if (isImageUrl(text)) {
        insertImage(editor, text, '');
      } else {
        insertData(data);
      }
    }
  };

  editor.insertBreak = () => {
    if (isInImage(editor)) {
      const paragraph = ParagraphNode();
      Transforms.insertNodes(editor, paragraph);
    }
  };

  editor.deleteBackward = (...args) => {
    if (isInImage(editor)) {
    }

    deleteBackward(...args);
  };

  return editor;
};

const insertImage = (editor: Editor, src: string, alt: string) => {
  const image = ImageNode(src, alt);
  Transforms.insertNodes(editor, image);
};

const isImageUrl = (url: string) => {
  if (!url) return false;
  return /\.(jpeg|jpg|gif|png)$/.test(url);
};
