'use client';

import { Editor } from 'slate';
import { KeyboardEvent } from 'react';
import { markEvents } from '../lib/helpers';

/**
 * A custom plugin that adds mark handling functionality to the Slate editor.
 * @param {Editor} editor - The Slate editor instance.
 * @returns {Editor} - The enhanced editor instance with mark handling functionality.
 */
export const withMarks = (editor: Editor): Editor => {
  const { onKeyDown } = editor;

  const { toggleMark } = markEvents(editor);

  editor.onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey) {
      switch (event.key) {
        case 'b': {
          event.preventDefault();
          toggleMark('bold');
          break;
        }
        case 'i': {
          event.preventDefault();
          toggleMark('italic');
          break;
        }
        case 'u': {
          event.preventDefault();
          toggleMark('underline');
          break;
        }
        case '`': {
          event.preventDefault();
          toggleMark('code');
          break;
        }
        case '=': {
          event.preventDefault();
          toggleMark('superscript');
          break;
        }
        case '-': {
          event.preventDefault();
          toggleMark('subscript');
          break;
        }
        case 's': {
          event.preventDefault();
          toggleMark('strikethrough');
          break;
        }
        default:
          break;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return editor;
};
