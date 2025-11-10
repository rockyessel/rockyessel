'use client';

import { Editor } from 'slate';

/**
 * A higher-order function that  to log every operation applied to it.
 *
 * @note This is only used for debugging purposes.
 * @param editor - The Slate editor instance to be extended.
 * @returns The same editor instance, but with added logging functionality.
 */
export const withLoggings = (editor: Editor):Editor => {
  // Destructure the apply method from the editor instance.
  const { apply } = editor;

  /**
   * Overriding the apply method of the editor to add logging.
   *
   * @param operation - The operation being applied to the editor.
   */
  editor.apply = (operation) => {
    // Log the operation to the console for debugging purposes.
    // console.log('Logging operation:', operation);

    // Call the original apply method with the operation.
    apply(operation);
  };

  // Return the modified editor instance.
  return editor;
};
