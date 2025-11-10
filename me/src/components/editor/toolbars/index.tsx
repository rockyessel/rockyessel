"use client";

import LinkPopupPanel from "./popup/link";
import MarksPopupPanel from "./popup/marks";
import BlockCodeToolbar from "./blocks/code";
import BlockLinkToolbar from "./blocks/link";
import BlockQuoteToolbar from "./blocks/quote";
import BlockImageToolbar from "./blocks/image";
import UndoRedoOpTool from "./op-tools/undo-redo";
import BlockOrderedToolbar from "./blocks/ordered";
import BlockUnorderedToolbar from "./blocks/unordered";
import ClearFormatOpTool from "./op-tools/clear-format";
import { SetStateAction, Dispatch, useRef } from "react";
import ClearAllFormatOpTool from "./op-tools/clear-all-format";
import BlockChecklistToolbar from "./blocks/checklist";
import BlockSeparatorToolbar from "./blocks/separator";
import { HEADING_ICON_MAP } from "../lib/constants";
import BlockHeadingsToolbar from "./blocks/headings";
import { HeadingTypes } from "../types";
import { cn } from "@/lib/utils/helpers";
import { HTMLDivProps } from "@/types";
import BlockTableToolbar from "./blocks/table";

interface Props {
  showLinkModal: boolean;
  setShowLinkModal: Dispatch<SetStateAction<boolean>>;
  props?: { className?: string } & HTMLDivProps;
}

const Toolbars = ({ showLinkModal, setShowLinkModal, props }: Props) => {
  const popupPanelRef = useRef<HTMLDivElement>(null);

  return (
    <div {...props} className={cn(props?.className)}>
      <MarksPopupPanel
        showLinkModal={showLinkModal}
        setShowLinkModal={setShowLinkModal}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <UndoRedoOpTool />
        </div>
        <div className="flex items-center gap-1.5">
          {Object.entries(HEADING_ICON_MAP).map(([type, _], index) => (
            <BlockHeadingsToolbar key={index} type={type as HeadingTypes} />
          ))}
          <BlockCodeToolbar />
          <BlockQuoteToolbar />
          <BlockImageToolbar />
          <BlockChecklistToolbar />
          <BlockSeparatorToolbar />
          <BlockOrderedToolbar />
          <BlockUnorderedToolbar />
          <BlockLinkToolbar
            showLinkModal={showLinkModal}
            setShowLinkModal={setShowLinkModal}
          />
          <BlockTableToolbar />
        </div>

        <div>
          <ClearFormatOpTool />
          <ClearAllFormatOpTool />
        </div>
      </div>

      {showLinkModal && (
        <LinkPopupPanel
          ref={popupPanelRef}
          showLinkModal={showLinkModal}
          setShowLinkModal={setShowLinkModal}
        />
      )}
    </div>
  );
};

export default Toolbars;
