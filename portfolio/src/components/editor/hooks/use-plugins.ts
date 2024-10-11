'use client';

import { useMemo } from 'react';
import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { withHtml } from '../plugins/with-html';
import { withMarks } from '../plugins/with-marks';
import { withLists } from '../plugins/with-lists';
import { withLinks } from '../plugins/with-links';
import { withBlocks } from '../plugins/with-blocks';
import { withInLines } from '../plugins/with-inlines';
import { withLoggings } from '../plugins/with-loggings';
import { withChecklist } from '../plugins/with-check-list';
import { withCodeBlock } from '../plugins/with-code-block';
import { withSeparator } from '../plugins/with-separator';
import { withStartPoint } from '../plugins/with-start-point';
import { withPlainTextPaste } from '../plugins/with-plain-text-paste';

export const usePlugins = () => {
  const editor = useMemo(
    () =>
      withHtml(
        withBlocks(
          withSeparator(
            withLists(
              withLinks(
                withInLines(
                  withMarks(
                    withPlainTextPaste(
                      withCodeBlock(
                        withChecklist(
                          withLoggings(
                            withHistory(
                              withStartPoint(withReact(createEditor()))
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      ),
    []
  );

  return editor;
};
