'use client';

import { isNodeText } from '@/components/editor/lib/helpers';
import { DefaultLeaf, RenderLeafProps } from 'slate-react';

const RenderMarkElements = (props: RenderLeafProps) => {
  let { children, leaf, attributes } = props;

  if (!isNodeText(leaf)) return <DefaultLeaf {...props} />;

  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.underline) children = <u>{children}</u>;
  if (leaf.code) children = <code>{children}</code>;
  if (leaf.subscript) children = <sub>{children}</sub>;
  if (leaf.superscript) children = <sup>{children}</sup>;
  if (leaf.strikethrough) children = <del>{children}</del>;
  return <span {...attributes}>{children}</span>;
};

export default RenderMarkElements;
