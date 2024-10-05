"use client";

import React from "react";
import { Editor } from "slate";
import { Transforms } from "slate";
import { useSlate } from "slate-react";
import { cn } from "@/lib/utils/helpers";
import { useBlocks } from "../../hooks/use-blocks";
import { SquareSplitVertical } from "lucide-react";
import { ParagraphNode, SeparatorNode } from "../../nodes";

const BlockSeparatorToolbar = () => {
  const editor = useSlate();
  const { getBlockAbove, isBlockActive } = useBlocks();
  const isActive = isBlockActive(editor, "separator");

  const handleSeparatorInsertion = () => {
    Editor.withoutNormalizing(editor, () => {
      // Remove empty paragraph
      const entry = getBlockAbove(editor);
      if (entry) {
        const [node, path] = entry;

        if (node.type === "paragraph" && Editor.isEmpty(editor, node)) {
          Transforms.removeNodes(editor, { at: path });
        }
      }

      const separatorNode = SeparatorNode();
      const paragraphNode = ParagraphNode();

      Transforms.insertNodes(editor, [separatorNode, paragraphNode], {
        match: (_, path) => path.length === 1,
      });
    });
  };

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleSeparatorInsertion}
      className={cn(
        "outline-none border-none",
        isActive ? "bg-white text-black" : ""
      )}
    >
      <SquareSplitVertical
        size={37}
        strokeWidth={2.25}
        className="my-auto hover:bg-slate-800 p-2 rounded-lg cursor-pointer"
      />
    </button>
  );
};

export default BlockSeparatorToolbar;
