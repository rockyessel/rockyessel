import {
  BlockQuoteType,
  BulletedListsType,
  CheckListContainerType,
  CheckListType,
  CodeBlockType,
  CodeProps,
  ColumnItemType,
  NodeText,
  ImageType,
  LinkProps,
  LinkType,
  ListType,
  NumberedListsType,
  ParagraphType,
  SeparatorType,
  TableRowType,
  TableType,
  TableCellType,
  TableHeaderType,
} from '../types';

export const ParagraphNode = (
  children: NodeText[] = [{ text: '' }]
): ParagraphType => {
  return {
    nodeType: 'block',
    type: 'paragraph',
    children,
  };
};

export const LinkNode = (
  { href, rel, target }: LinkProps,
  text?: string
): LinkType => {
  return {
    type: 'link',
    children: [{ text: text ?? '' }],
    nodeType: 'inline',
    props: { href, target, rel },
  };
};

export const ListNode = (text?: string): ListType => {
  return {
    nodeType: 'block',
    type: 'list',
    children: [{ text: text ?? '' }],
  };
};

export const BulletedListNode = (): BulletedListsType => {
  return {
    nodeType: 'block',
    type: 'bulleted-lists',
    children: [ListNode()],
  };
};

export const NumberedListNode = (ordered: boolean): NumberedListsType => {
  return {
    nodeType: 'block',
    type: 'numbered-lists',
    children: [ListNode()],
  };
};

export const CodeBlockNode = (
  text: string,
  { ...props }: CodeProps
): CodeBlockType => {
  return {
    nodeType: 'block',
    type: 'code-block',
    props,
    children: [{ text }],
  };
};

export const ImageNode = (
  src: string,
  alt: string,
  height = 400,
  width = 400,
  caption = 'No caption provided'
): ImageType => {
  return {
    nodeType: 'void',
    type: 'image',
    props: { src, alt, height, width },
    children: [{ text: caption }],
  };
};

export const CheckListNode = (
  checked: boolean,
  text?: string
): CheckListType => {
  return {
    nodeType: 'block',
    type: 'check-list',
    checked,
    children: [{ text: text ?? '' }],
  };
};

export const checklistContainerNode = (
  children?: CheckListType[]
): CheckListContainerType => {
  return {
    nodeType: 'block',
    type: 'check-list-container',
    children: children ?? [CheckListNode(false)],
  };
};

export const BlockQuoteNode = (
  children: [{ text: string }]
): BlockQuoteType => {
  return {
    nodeType: 'block',
    type: 'block-quote',
    children,
  };
};

export const SeparatorNode = (): SeparatorType => {
  return {
    nodeType: 'void',
    type: 'separator',
    children: [{ text: '' }],
  };
};

export const ColumnItemNode = (): ColumnItemType => {
  return {
    nodeType: 'inline',
    type: 'column-item',
    children: [{ text: '' }],
  };
};

export const TableNode = (numRows: number, numCols: number): TableType => {
  const headers = Array.from({ length: numCols }, (_, index) =>
    TableCellNode(`Header ${index + 1}`)
  );

  const rows = Array.from({ length: numRows }, (_, rowIndex) =>
    TableRowNode(
      Array.from({ length: numCols }, (_, colIndex) =>
        TableCellNode(`Cell ${rowIndex + 1}-${colIndex + 1}`)
      )
    )
  );

  return {
    nodeType: 'block',
    type: 'table',
    children: [TableRowNode(headers), ...rows],
  };
};

export const TableHeaderNode = (text: string): TableHeaderType => {
  return {
    nodeType: 'block',
    type: 'table-header',
    children: [TableCellNode(text)],
  };
};

export const TableRowNode = (cells: TableCellType[]): TableRowType => {
  return {
    nodeType: 'block',
    type: 'table-row',
    children: cells,
  };
};

export const TableCellNode = (text: string): TableCellType => {
  return {
    nodeType: 'block',
    type: 'table-cell',
    children: [{ text }],
  };
};
