"use client";

import {
  Dispatch,
  forwardRef,
  SetStateAction,
  useImperativeHandle,
  useCallback,
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  useMemo,
  SyntheticEvent,
} from "react";
import PopupPanel from "./panel";
import { ReactEditor, useSlate } from "slate-react";
import { Link, CheckCheck, X, Copy, ExternalLink } from "lucide-react";
import { BaseSelection, Editor, Element, Node } from "slate";

import { cn } from "@/lib/utils/helpers";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Transforms } from "slate";
import { useLink } from "../../hooks/use-link";
import { useAlert } from "@gear-js/react-hooks";
import { isValidURL } from "../../lib/helpers";

interface Props {
  showLinkModal: boolean;
  setShowLinkModal: Dispatch<SetStateAction<boolean>>;
}

const LinkPopupPanel = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { setShowLinkModal, showLinkModal } = props;
  const [originalSelection, setOriginalSelection] =
    useState<BaseSelection>(null);
  const editor = useSlate();
  const { isSelectionLink, insertLink } = useLink();
  const alert = useAlert();

  const nameInputRef = useRef<HTMLInputElement>(null);
  const hrefInputRef = useRef<HTMLInputElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => divRef.current as HTMLDivElement);

  const actionHandler = useCallback(
    (event: any) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowLinkModal(false);
      }
    },
    [setShowLinkModal, divRef]
  );

  useEffect(() => {
    if (showLinkModal) {
      document.addEventListener("mousedown", actionHandler);
      document.addEventListener("keydown", actionHandler);
      return () => {
        document.removeEventListener("mousedown", actionHandler);
        document.removeEventListener("keydown", actionHandler);
      };
    }
  }, [showLinkModal, actionHandler]);

  useEffect(() => {
    if (showLinkModal) {
      setOriginalSelection(editor.selection);
      const x = window.scrollX;
      const y = window.scrollY;

      // Ensure the component is fully rendered before focusing
      setTimeout(() => {
        // if (nameInputRef.current) {
        //   nameInputRef.current.focus();
        // }
        if (hrefInputRef.current) {
          hrefInputRef.current.focus();
        }
      }, 0);

      window.scrollTo(x, y);
    }
  }, [editor, showLinkModal]);

  const defaultTextValue = useMemo(() => {
    const { selection } = editor;
    if (!selection) return "";
    if (isSelectionLink(editor)) {
      const linkNode = Node.parent(editor, selection.focus.path);
      return Editor.string(editor, ReactEditor.findPath(editor, linkNode));
    }
    return Editor.string(editor, selection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  const defaultLinkValue = useMemo(() => {
    const { selection } = editor;
    if (!selection) return "";
    if (isSelectionLink(editor)) {
      const linkNode = Node.parent(editor, selection.focus.path);

      const node =
        Element.isElement(linkNode) && linkNode.type === "link" && linkNode;

      return node ? node.props.href : "";
    }
    return "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  const applyLink = (event: SyntheticEvent) => {
    event.preventDefault(); // Prevent form from submitting

    if (!originalSelection) return;

    // Access values using refs
    const url = hrefInputRef.current?.value;
    const text = nameInputRef.current?.value;

    if (!url) {
      alert.error("Please provide a link.");
      return;
    }

    const isValid = isValidURL(url);
    if (!isValid) {
      alert.error("Not valid");
      return;
    }

    Transforms.select(editor, originalSelection);
    insertLink(editor, url, text);
    Transforms.collapse(editor, { edge: "end" });
    ReactEditor.focus(editor);
    setShowLinkModal(false);
  };

  return (
    <PopupPanel
      ref={divRef}
      placement="bottom"
      className="w-[320px] p-0.5"
      currentSelection={originalSelection}
    >
      <div className="flex flex-col gap-1">
        <form onSubmit={applyLink} className="w-full flex flex-col gap-1">
          <input
            ref={nameInputRef}
            type="text"
            className="text-xs focus:border-lime-600/40 px-2 py-1 h-[1.65rem] placeholder:text-xs outline-none border rounded-md border-zinc-700/40 bg-transparent"
            placeholder="Enter a link name"
            name="name"
            defaultValue={defaultTextValue}
            title="Name of the link(alias)"
          />

          <div className="flex items-center gap-0.5">
            <input
              ref={hrefInputRef}
              type="text"
              className="w-full text-xs focus:border-lime-600/40 px-2 py-1 h-[1.65rem] placeholder:text-xs outline-none border rounded-md border-zinc-700/40 bg-transparent"
              placeholder={"http://example.com"}
              name="href"
              defaultValue={defaultLinkValue}
              title=""
            />
            <div className="flex items-center gap-0.5">
              <button
                type="submit"
                className={cn(
                  " rounded-md outline-none border border-zinc-700/40 hover:border-lime-600/40 hover:text-lime-600"
                )}
              >
                <CheckCheck
                  size={20}
                  strokeWidth={2.25}
                  className="w-[1.65rem] h-[1.65rem] p-1 my-auto hover:bg-neutral-800 hover:border-zinc-700/40 border border-transparent rounded-md cursor-pointer"
                />
              </button>
              <button
                type="button"
                className={cn(
                  "rounded-md outline-none border border-zinc-700/40 hover:border-lime-600/40 hover:text-rose-600"
                )}
              >
                <X
                  size={20}
                  strokeWidth={2.25}
                  className="w-[1.65rem] h-[1.65rem] p-1 my-auto hover:bg-neutral-800 hover:border-zinc-700/40 border border-transparent rounded-md cursor-pointer"
                />
              </button>
            </div>
          </div>
        </form>

        <div className="w-full mt-2.5">
          <div className="flex items-center justify-between">
            <div className="text-gray-400 font-thin text-[0.3rem] flex items-center space-x-2">
              <Label htmlFor="more-options">More options</Label>
              <Switch
                id="more-options"
                rootStyle="h-3 w-8"
                thumbStyle="w-2 h-2"
              />
            </div>

            <div className="flex items-center gap-0.5">
              <button
                className={cn(
                  " rounded-md outline-none border border-zinc-700/40 hover:border-lime-600/40 hover:text-lime-600"
                )}
              >
                <Copy
                  size={20}
                  strokeWidth={2.25}
                  className="w-[1.65rem] h-[1.65rem] p-1 my-auto hover:bg-neutral-800 hover:border-zinc-700/40 border border-transparent rounded-md cursor-pointer"
                />
              </button>
              <button
                className={cn(
                  "rounded-md outline-none border border-zinc-700/40 hover:border-lime-600/40 hover:text-lime-600"
                )}
              >
                <ExternalLink
                  size={20}
                  strokeWidth={2.25}
                  className="w-[1.65rem] h-[1.65rem] p-1 my-auto hover:bg-neutral-800 hover:border-zinc-700/40 border border-transparent rounded-md cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </PopupPanel>
  );
});

LinkPopupPanel.displayName = "LinkPopupPanel";

export default LinkPopupPanel;
