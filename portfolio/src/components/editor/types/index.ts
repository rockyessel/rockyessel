import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';
import { BaseEditor, Text, Descendant } from 'slate';
import { KeyboardEvent, ForwardRefExoticComponent, RefAttributes } from 'react';
import { Locale } from '@/i18n.config';
import { LucideProps } from 'lucide-react';

export type KeyEventEditor = {
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
};

export type LocaleEditor = {
  lang: Locale;
};

export type SlateEditor = BaseEditor &
  ReactEditor &
  HistoryEditor &
  KeyEventEditor &
  LocaleEditor;

declare module 'slate' {
  interface CustomTypes {
    Editor: SlateEditor;
    Element: ElementNodeType;
    Text: ChildNode;
    Descendant: ElementNodeType;
  }
  interface BaseElement {
    type: ElementTypes;
  }
}

export type NodeFragmentType = {
  nodeType: OnPasteFragmentElement['nodeType'];
  type: OnPasteFragmentElement['type'];
  children: Text[];
};

export type OnPasteFragmentElement =
  | BulletedListsType
  | NumberedListsType
  | HeadingsType
  | ListType
  | LinkType
  | ImageType
  | ParagraphType
  | BlockQuoteType
  | CodeBlockType
  | CheckListType;

export type ElementNodeType =
  | ListType
  | LinkType
  | ImageType
  | ParagraphType
  | BlockQuoteType
  | CodeBlockType
  | TableType
  | TableRowType
  | TableCellType
  | TableHeaderType
  | TableBodyType
  | CheckListType
  | CheckListContainerType
  | SeparatorType
  | ColumnItemType
  | ColumnLayoutType
  | BulletedListsType
  | NumberedListsType
  | HeadingsType;

export type ElementTypes = ElementNodeType['type'];
export type ElementNodeTypes = ElementNodeType['nodeType'];

export type ChildNode = NodeText | LinkType;

export type NodeText = {
  text: string;
  placeholder?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  strikethrough?: boolean;
  subscript?: boolean;
  superscript?: boolean;
};

export type LeafTypes = keyof NodeText;

export type Alignment = 'left' | 'center' | 'right' | 'justify';

export type TableType = {
  nodeType: 'block';
  type: 'table';
  children: (TableHeaderType | TableRowType | TableBodyType)[];
};

export type TableBodyType = {
  nodeType: 'block';
  type: 'table-body';
  children: TableRowType[];
};

export type TableHeaderType = {
  nodeType: 'block';
  type: 'table-header';
  children: TableCellType[];
};

export type TableRowType = {
  nodeType: 'block';
  type: 'table-row';
  children: TableCellType[];
};

export type TableCellType = {
  nodeType: 'block';
  type: 'table-cell';
  colspan?: number;
  rowspan?: number;
  children: Text[];
};

export type ParagraphType = {
  nodeType: 'block';
  type: 'paragraph';
  children: Text[];
};

export type HeadingOneType = {
  nodeType: 'block';
  type: 'heading-one';
  children: Text[];
};

export type HeadingTwoType = {
  nodeType: 'block';
  type: 'heading-two';
  children: Text[];
};

export type HeadingThreeType = {
  nodeType: 'block';
  type: 'heading-three';
  children: Text[];
};
export type HeadingFourType = {
  nodeType: 'block';
  type: 'heading-four';
  children: Text[];
};
export type HeadingFiveType = {
  nodeType: 'block';
  type: 'heading-five';
  children: Text[];
};
export type HeadingSixType = {
  nodeType: 'block';
  type: 'heading-six';
  children: Text[];
};

export type HeadingsType =
  | HeadingOneType
  | HeadingTwoType
  | HeadingThreeType
  | HeadingFourType
  | HeadingFiveType
  | HeadingSixType;

export type HeadingTypes = HeadingsType['type'];

type ImagePropsType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ImageType = {
  nodeType: 'void';
  type: 'image';
  props: ImagePropsType;
  children: Text[];
};

export type SeparatorType = {
  nodeType: 'void';
  type: 'separator';
  children: Text[];
};

export type BlockQuoteType = {
  nodeType: 'block';
  type: 'block-quote';
  children: Text[];
};

export type CheckListType = {
  nodeType: 'block';
  type: 'check-list';
  checked: boolean;
  children: Text[];
};

export type CheckListContainerType = {
  nodeType: 'block';
  type: 'check-list-container';
  align?: Alignment;
  children: CheckListType[];
};

export type BulletedListsType = {
  nodeType: 'block';
  type: 'bulleted-lists';
  align?: Alignment;
  children: ListType[];
};

export type NumberedListsType = {
  nodeType: 'block';
  type: 'numbered-lists';
  align?: Alignment;
  children: ListType[];
};

export type ListType = {
  nodeType: 'block';
  type: 'list';
  align?: Alignment;
  children: Text[];
};

export type LinkProps = {
  href: string;
  target: string;
  rel: string;
};

export type LinkType = {
  nodeType: 'inline';
  type: 'link';
  props: LinkProps;
  children: Text[];
};

export type CodeProps = {
  code: string;
  language: string;
  theme: string;
  isShowLins?: boolean;
};

export type CodeBlockType = {
  nodeType: 'block';
  type: 'code-block';
  props: CodeProps;
  children: Text[];
};

export type ColumnItemType = {
  nodeType: 'inline';
  type: 'column-item';
  children: Text[];
};

export type ColumnLayoutType = {
  nodeType: 'block';
  type: 'column-layout';
  columns: number;
  children: ColumnItemType[];
};

export interface RenderProps<T> {
  element: T;
  children: any;
  attributes: {
    'data-slate-node': 'element';
    'data-slate-inline'?: true;
    'data-slate-void'?: true;
    dir?: 'rtl';
    ref: any;
  };
}

export type MarkdownShortcuts = {
  '#': 'heading1';
  '##': 'heading2';
  '###': 'heading3';
  '####': 'heading4';
  '#####': 'heading5';
  '######': 'heading6';
  '>': 'quote';
  '<': 'quote';
  '```': 'code-block';
  '* ': 'bulleted-list';
  '- ': 'bulleted-list';
  '+ ': 'bulleted-list';
  '1.': 'numbered-list';
  '1-': 'numbered-list';
  '1)': 'numbered-list';
  '[]': 'checkbox-list';
  '[x]': 'checkbox-list';
  '[ ]': 'checkbox-list';
  '**': 'bold';
  '*': 'italic';
  _: 'italic';
  '![alt text](url)': 'image';
  '[link text](url)': 'link';
  '~~~': 'strikethrough';
  '`': 'inline-code';
  '===': 'hr';
  '---': 'hr';
};

export type ElementTagsType = Record<
  string,
  (element: Element) => Partial<ElementNodeType>
>;

export type TextTagFunctionType = () => Partial<NodeText>;

export interface IPanelMarks {
  mark: LeafTypes;
  iconSize: number;
  icon: any;
}

export type HeadingIconType = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

export type TOCHeaderType = {
  text: string;
  children: TOCHeaderType[];
};

export type StackItemType = {
  level: number;
  header: TOCHeaderType;
};