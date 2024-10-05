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
import { RenderElementProps } from 'slate-react';
import { createSlug } from '@/lib/utils/helpers';
import HtmlBlockQuoteElement from './blockquote';
import HtmlChecklistContainerElement from './checklist-container';

const EditorHtmlElements = (props: RenderElementProps) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case 'paragraph':
      const pProps = { element, children, attributes };
      return <HtmlPElement {...pProps} />;
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
    case 'column-item':
      const columnItemProps = { element, children, attributes };
      return <p {...attributes}>{children}</p>;
    case 'link':
      const linkProps = { element, children, attributes };
      return <HtmlLinkElement {...linkProps} />;
    case 'column-layout':
      const columnLayoutProps = { element, children, attributes };
      return <p {...attributes}>{children}</p>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default EditorHtmlElements;
