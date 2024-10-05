import { Descendant } from "slate";
import {
  checklistContainerNode,
  CheckListNode,
  ParagraphNode,
} from "../../nodes";
import {
  CodeProps,
  ElementTypes,
  HeadingIconType,
  HeadingTypes,
  IPanelMarks,
  NodeText,
  ElementNodeTypes,
} from "../../types";
import {
  Bold,
  Code,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "lucide-react";
import { ElementType } from "react";

export const PANEL_MARKS: IPanelMarks[] = [
  { mark: "bold", iconSize: 20, icon: Bold },
  { mark: "italic", iconSize: 20, icon: Italic },
  { mark: "underline", iconSize: 20, icon: Underline },
  { mark: "code", iconSize: 20, icon: Code },
  { mark: "superscript", iconSize: 32, icon: Superscript },
  { mark: "subscript", iconSize: 32, icon: Subscript },
  { mark: "strikethrough", iconSize: 20, icon: Strikethrough },
];

export const codeThemes = [
  "a11yDark",
  "atomDark",
  "base16AteliersulphurpoolLight",
  "cb",
  "coldarkCold",
  "coldarkDark",
  "coyWithoutShadows",
  "coy",
  "darcula",
  "dark",
  "dracula",
  "duotoneDark",
  "duotoneEarth",
  "duotoneForest",
  "duotoneLight",
  "duotoneSea",
  "duotoneSpace",
  "funky",
  "ghcolors",
  "gruvboxDark",
  "gruvboxLight",
  "holiTheme",
  "hopscotch",
  "lucario",
  "materialDark",
  "materialLight",
  "materialOceanic",
  "nightOwl",
  "nord",
  "okaidia",
  "oneDark",
  "oneLight",
  "pojoaque",
  "prism",
  "shadesOfPurple",
  "solarizedDarkAtom",
  "solarizedlight",
  "synthwave84",
  "tomorrow",
  "twilight",
  "vs",
  "vscDarkPlus",
  "xonokai",
  "zTouch",
];

export const emptyParagraph: Descendant[] = [
  ParagraphNode(),
  checklistContainerNode([CheckListNode(true, "Passed the test.")]),
];

export const initialValue: Descendant[] = [
  {
    nodeType: "block",
    type: "column-layout",
    columns: 2,
    children: [
      {
        type: "column-item",
        nodeType: "inline",
        children: [{ text: "Column 1 Text" }],
      },
      {
        type: "column-item",
        nodeType: "inline",
        children: [{ text: "Column 2 Text" }],
      },
    ],
  },
  {
    type: "block-quote",
    nodeType: "block",
    children: [{ text: "A wise quote." }],
  },
  {
    type: "check-list",
    nodeType: "block",
    checked: false,
    children: [
      { text: "Express yourself with a touch of fun 🎉 and emotion 😃." },
    ],
  },
  {
    type: "image",
    nodeType: "void",
    props: {
      src: "https://source.unsplash.com/zOwZKwZOZq8",
      alt: "",
      height: 400,
      width: 400,
    },
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    nodeType: "block",
    children: [
      {
        text: "This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image src to your clipboard and paste it anywhere in the editor!",
      },
    ],
  },
  {
    type: "paragraph",
    nodeType: "block",
    children: [
      {
        text: "You can delete images with the cross in the top left. Try deleting this sheep:",
      },
    ],
  },
  {
    type: "image",
    nodeType: "void",
    props: {
      src: "https://source.unsplash.com/zOwZKwZOZq8",
      alt: "",
      height: 400,
      width: 400,
    },
    children: [{ text: "" }],
  },
  {
    nodeType: "block",
    type: "paragraph",
    children: [{ text: "fontLists is the list of all font" }],
  },
];

export const TARGET_OPTIONS = [
  { label: "_self", value: "_self" },
  { label: "_blank", value: "_blank" },
  { label: "_parent", value: "_parent" },
  { label: "_top", value: "_top" },
];

export const REL_OPTIONS = [
  { label: "noopener", value: "noopener" },
  { label: "noreferrer", value: "noreferrer" },
  { label: "nofollow", value: "nofollow" },
  { label: "ugc", value: "ugc" },
  { label: "canonical", value: "canonical" },
  { label: "license", value: "license" },
];

export const DEFAULT_CODE: CodeProps = {
  code: "",
  language: "plain",
  theme: "dracula",
  isShowLins: false,
};

export const MARKS_STATE = {
  bold: false,
  italic: false,
  underline: false,
  code: false,
  strikethrough: false,
  subscript: false,
  superscript: false,
};

export const HEADING_ICON_MAP: Record<HeadingTypes, HeadingIconType> = {
  "heading-one": Heading1,
  "heading-two": Heading2,
  "heading-three": Heading3,
  "heading-four": Heading4,
  "heading-five": Heading5,
  "heading-six": Heading6,
};

export const HEADING_EL_MAP: Record<HeadingTypes, ElementType> = {
  "heading-one": "h1",
  "heading-two": "h2",
  "heading-three": "h3",
  "heading-four": "h4",
  "heading-five": "h5",
  "heading-six": "h6",
};

/**
 * A mapping of node types to their respective properties.
 * @type {Record<string, { nodeType: string; defaultChildren: NodeText[] }>}
 */
export const NODE_TYPE_MAPPING: Record<ElementTypes, {nodeType:ElementNodeTypes; defaultChildren:NodeText[]}> = {
  "paragraph": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "heading-one": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "heading-two": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "heading-three": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "heading-four": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "heading-five": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "heading-six": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "block-quote": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "check-list": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "check-list-container": { nodeType: "block", defaultChildren: [] },
  "bulleted-lists": { nodeType: "block", defaultChildren: [] },
  "numbered-lists": { nodeType: "block", defaultChildren: [] },
  "list": { nodeType: "block", defaultChildren: [{ text: "" }] },
  // "table": { nodeType: "block", defaultChildren: [] },
  // "table-row": { nodeType: "block", defaultChildren: [] },
  // "table-cell": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "image": { nodeType: "void", defaultChildren: [] },
  "separator": { nodeType: "void", defaultChildren: [] },
  "code-block": { nodeType: "block", defaultChildren: [{ text: "" }] },
  "link": { nodeType: "inline", defaultChildren: []},
  "column-item": { nodeType: "block", defaultChildren: []},
  "column-layout": { nodeType: "block", defaultChildren: []}
};

// const MARKDOWN_SHORTCUTS: Record<string, ElementNodeTypes> = {
//   '#': 'heading1',
//   '##': 'heading2',
//   '###': 'heading3',
//   '>': 'quote',
//   '<': 'quote',
//   '```': 'code-block',
//   '*': 'bulleted-list',
//   '-': 'bulleted-list',
//   '1.': 'numbered-list',
//   '1-': 'numbered-list',
//   '1)': 'numbered-list',
// };
