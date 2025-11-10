'use client';

import { Editor } from 'slate';

/**
 * A higher-order function that extends the functionality of a Slate editor instance
 * to handle pasting plain text. If plain text is detected in the clipboard data,
 * it will insert the plain text directly into the editor.
 *
 * @param editor - The Slate editor instance to be extended.
 * @returns The same editor instance, but with added plain text paste handling functionality.
 */
export const withPlainTextPaste = (editor: Editor): Editor => {
  // Destructure the insertData and insertText methods from the editor instance.
  const { insertData, insertText } = editor;

  /**
   * Overriding the insertData method of the editor to handle plain text pasting.
   *
   * @param data - The DataTransfer object containing the clipboard data.
   */
  editor.insertData = (data: DataTransfer) => {
    // Retrieve the plain text data from the clipboard.
    const text = data.getData('text/plain');

    // console.log('data: ',data)
    // If there is plain text data, insert it into the editor.
    if (text) {
      insertText(text);
      return;
    }

    // If no plain text data is found, call the original insertData method.
    insertData(data);
  };

  // Return the modified editor instance.
  return editor;
};
