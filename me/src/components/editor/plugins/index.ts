// import { Editor } from 'slate';
// import { pipe } from 'lodash/fp';
// import { withReact } from 'slate-react';
// import { withMarks } from './with-marks';
// import { withHistory } from 'slate-history';
// import { withLoggings } from './with-loggings';
// import { withCodeBlock } from './with-code-block';
// import { withChecklist } from './with-check-list';
// import { withBlockquote } from './with-blockquote';
// import { withPlainTextPaste } from './with-plain-text-paste';

// /**
//  * A function that pipes together multiple Slate editor plugins to enhance the editor instance.
//  * This function uses lodash's `pipe` function to compose the plugins.
//  *
//  * @param {Editor} editor - The initial editor instance to enhance.
//  * @returns {Editor} - The enhanced editor instance with all the plugins applied.
//  */
// export const withPlugins = (editor: Editor): Editor =>
//   pipe(
//     withMarks,
//     withReact,
//     withHistory,
//     withLoggings,
//     withChecklist,
//     withCodeBlock,
//     withBlockquote,
//     withPlainTextPaste
//   )(editor);
