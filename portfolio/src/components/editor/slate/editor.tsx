'use client';

import Toolbars from '../toolbars';
import { Locale } from '@/i18n.config';
import { HTMLDivProps } from '@/types';
import { cn } from '@/lib/utils/helpers';
import { useLink } from '../hooks/use-link';
import { useCallback, useState } from 'react';
import { usePlugins } from '../hooks/use-plugins';
import { emptyParagraph } from '../lib/constants';
import { EditorProvider } from '../contexts/editor';
import { Descendant, Editor, NodeEntry, Range } from 'slate';
import {
  Editable,
  RenderElementProps,
  RenderLeafProps,
  Slate,
} from 'slate-react';
import { descendant } from '../lib/helpers';

interface Props {
  eHtml: {
    leafs: (props: RenderLeafProps) => JSX.Element;
    elements: (props: RenderElementProps) => JSX.Element;
  };
  locale: Locale;
  className?: string;
  onChange?: (value: Descendant[]) => void;
  content?: Descendant[]|string;
  toolbar?: {
    className?: string;
  } & HTMLDivProps;
}

const SymbionTextEditor = ({ eHtml, className, ...props }: Props) => {
  const { onChange, content, toolbar, locale } = props;
  const editor = usePlugins();
  const [showLinkModal, setShowLinkModal] = useState(false);

  const { isSelectionLinkBody } = useLink();

  const initialValue = content ?? emptyParagraph;

  const onValueChange = (value: Descendant[]) => {
    try {
      const { selection, operations } = editor;

      const isSelection = operations.some((op) => 'set_selection' === op.type);

      if (!isSelection && onChange) {
        onChange(value);
      }

      if (isSelection && selection) {
        if (isSelectionLinkBody(editor)) {
          setShowLinkModal(true);
        }
        console.log('selection: ', selection);
      }
    } catch (err) {
      console.log('Caught exception within onChange', err);
    }
  };

  const decorate = useCallback(
    (nodeEntry: NodeEntry) => {
      const ranges: Range[] = [];

      const [node, path] = nodeEntry;

      if (editor && editor.selection) {
        const { isEditor, string } = Editor;
        const { includes, isCollapsed } = Range;

        // Check if the node is not the editor itself
        const isNotEditorNode = !isEditor(node);

        // Ensure path is valid and not empty
        const isValidPath = path && path[0] !== undefined;
        const nodeContent = isValidPath ? string(editor, [path[0]]) : '';

        // Check if the node content is an empty string
        const isEmptyNode = nodeContent === '';

        // Check if the current selection includes the node path
        const isSelectionIncludesNode = includes(editor.selection, path);

        // Check if the selection is collapsed (i.e., just a cursor)
        const isSelectionCollapsed = isCollapsed(editor.selection);

        // Combine all conditions to determine if the node is empty and the selection is at the cursor
        const isEmptyNodeInSelection =
          isNotEditorNode &&
          isEmptyNode &&
          isSelectionIncludesNode &&
          isSelectionCollapsed;

        if (isEmptyNodeInSelection) {
          return [
            {
              ...editor.selection,
              placeholder: true,
            },
          ];
        }
      }

      return ranges;
    },
    [editor]
  );

  return (
    <Slate
      editor={editor}
      onValueChange={onValueChange}
      initialValue={descendant(initialValue)}
    >
      <EditorProvider>
        <div className='relative'>
          <Toolbars
            props={toolbar}
            showLinkModal={showLinkModal}
            setShowLinkModal={setShowLinkModal}
          />

          <div className='p-3'>
            <Editable
              id='symbion-editor'
              autoFocus={true}
              style={{ wordBreak: 'break-word' }}
              readOnly={false}
              decorate={decorate}
              renderLeaf={eHtml.leafs}
              onKeyDown={editor.onKeyDown}
              renderElement={eHtml.elements}
              className={cn('relative outline-none border-none', className)}
            />
          </div>
        </div>
      </EditorProvider>
    </Slate>
  );
};

export default SymbionTextEditor;
