"use client";

import { HeadingTypes } from "../../types";
import { useBlocks } from "../../hooks/use-blocks";
import { useSlate } from "slate-react";
import { cn } from "@/lib/utils/helpers";
import { HEADING_ICON_MAP } from "../../lib/constants";

interface Props {
  type: HeadingTypes;
}

const BlockHeadingsToolbar = ({ type }: Props) => {
  const { toggleBlock, isBlockActive } = useBlocks();
  const editor = useSlate();
  const isActive = isBlockActive(editor, type);

  // console.log({ type, editor });

  const handleHeadingChange = () => {
    if (!type) {
      throw Error(`No heading {{type}} provided`);
    }

    toggleBlock(editor, type);
  };
  const Icon = HEADING_ICON_MAP[type];

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleHeadingChange}
      className={cn(
        "outline-none border-none",
        isActive ? "rounded-md text-lime-600 bg-neutral-800 border border-zinc-700/40" : ""
      )}
    >
      <Icon
        size={37}
        strokeWidth={2.25}
        className="my-auto hover:bg-neutral-800 p-2 rounded-lg cursor-pointer"
      />
    </button>
  );
};

export default BlockHeadingsToolbar;
