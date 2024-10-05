"use client";

import { Fragment } from "react";
import { isBlockActive, isNodeText } from "@/components/editor/lib/helpers";
import { DefaultLeaf, RenderLeafProps, useSlate } from "slate-react";

const MarkElements = (props: RenderLeafProps) => {
  let { attributes, children, leaf } = props;
  const editor = useSlate();

  // Making sure leaf node is of type `Text`
  if (!isNodeText(leaf)) return <Fragment />;

  if (leaf.placeholder && isBlockActive(editor, "paragraph")) {
    return (
      <Fragment>
        <span
          className="pointer-events-none absolute top-0 bg-transparent opacity-30"
          contentEditable={false}
        >
          Type &apos;/&apos; for commands
        </span>
        <DefaultLeaf {...props} />
      </Fragment>
    );
  }

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.code) {
    children = <code>{children}</code>;
  }
  if (leaf.subscript) {
    children = <sub>{children}</sub>;
  }
  if (leaf.superscript) {
    children = <sup>{children}</sup>;
  }
  if (leaf.strikethrough) {
    children = <del>{children}</del>;
  }

  return <span {...attributes}>{children}</span>;
};

export default MarkElements;
