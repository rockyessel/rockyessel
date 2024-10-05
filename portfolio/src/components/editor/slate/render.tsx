"use client";

import { Descendant } from "slate";
import { cn } from "@/lib/utils/helpers";
import { ParagraphNode } from "../nodes";
import { usePlugins } from "../hooks/use-plugins";
import { Editable, RenderElementProps, RenderLeafProps, Slate } from "slate-react";

interface Props {
  rHtml: {
    leafs: (props: RenderLeafProps) => JSX.Element;
    elements: (props: RenderElementProps) => JSX.Element;
  };
  className?: string;
  content?: Descendant[];
}

const SymbionEditorRender = ({ rHtml, className, content }: Props) => {
  const editor = usePlugins();

  const descendant = content || [ParagraphNode([{ text: "No content found" }])];

  return (
    <Slate editor={editor} initialValue={descendant}>
      <Editable
        id="symbion-editor"
        readOnly={true}
        className={cn("outline-none border-none", className)}
        renderLeaf={rHtml.leafs}
        renderElement={rHtml.elements}
      />
    </Slate>
  );
};

export default SymbionEditorRender;
