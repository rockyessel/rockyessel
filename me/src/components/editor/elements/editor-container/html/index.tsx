'use client';

import HtmlPElement from './p';
import HtmlUlElement from './ul';
import HtmlOlElement from './ol';
import HtmlHrElement from './hr';
import HtmlLiElement from './li';
import HtmlImageElement from './img';
import HtmlLinkElement from './link';
import HtmlPreCodeElement from './pre';
import { HeadingTypes } from '../../../types';
import HTMLHeadingsElements from './headings';
import HtmlChecklistElement from './checklist';
import { DefaultElement, RenderElementProps } from 'slate-react';
import { createSlug } from '@/lib/utils/helpers';
import HtmlBlockQuoteElement from './blockquote';
import HtmlChecklistContainerElement from './checklist-container';
import HtmlKatexBlockElement from './katex-block';

const EditorHtmlElements = (props: RenderElementProps) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case 'heading-one':
    case 'heading-two':
    case 'heading-three':
    case 'heading-four':
    case 'heading-five':
    case 'heading-six':
      return <HTMLHeadingsElements type={element.type} props={props} />;
    case 'image':
      const imageProps = { element, children, attributes };
      return <HtmlImageElement {...imageProps} />;
    case 'block-quote':
      const blockQuoteProps = { element, children, attributes };
      return <HtmlBlockQuoteElement {...blockQuoteProps} />;
    case 'check-list-container':
      const checklistContainerProps = { element, children, attributes };
      return <HtmlChecklistContainerElement {...checklistContainerProps} />;
    case 'check-list':
      const checklistsProps = { element, children, attributes };
      return <HtmlChecklistElement {...checklistsProps} />;
    case 'bulleted-lists':
      const bulletProps = { element, children, attributes };
      return <HtmlUlElement {...bulletProps} />;
    case 'numbered-lists':
      const numberedProps = { element, children, attributes };
      return <HtmlOlElement {...numberedProps} />;
    case 'list':
      const listProps = { element, children, attributes };
      return <HtmlLiElement {...listProps} />;
    case 'code-block':
      const preCodeProps = { element, children, attributes };
      return <HtmlPreCodeElement {...preCodeProps} />;
    case 'separator':
      const separatorProps = { element, children, attributes };
      return <HtmlHrElement {...separatorProps} />;
    case 'table':
      return <table {...attributes}>{children}</table>;
    case 'table-row':
      return <tr {...attributes}>{children}</tr>;
    case 'table-cell':
      return <td {...attributes}>{children}</td>;
    case 'table-header':
      return <th {...attributes}>{children}</th>;
    case 'table-body':
      return <tbody {...attributes}>{children}</tbody>;
    case 'column-item':
      const columnItemProps = { element, children, attributes };
      return <p {...attributes}>{children}</p>;
    case 'link':
      const linkProps = { element, children, attributes };
      return <HtmlLinkElement {...linkProps} />;
    case 'column-layout':
      const columnLayoutProps = { element, children, attributes };
      return <p {...attributes}>{children}</p>;
    case 'paragraph':
      const pProps = { element, children, attributes };
      return <HtmlPElement {...pProps} />;
    case 'katex-block':
      const katexBlockProps = { element, children, attributes };
      return <HtmlKatexBlockElement {...katexBlockProps} />;

    default:
      <DefaultElement {...props} />;
  }
};

export default EditorHtmlElements;
