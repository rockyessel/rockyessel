'use client';

import { DefaultElement, RenderElementProps } from 'slate-react';
import HTMLHeadingsElementsRender from './headings';
import { Fragment } from 'react';

const RenderHtmlElements = (props: RenderElementProps) => {
  const { children, element, attributes } = props;

  switch (element.type) {
    case 'heading-one':
    case 'heading-two':
    case 'heading-three':
    case 'heading-four':
    case 'heading-five':
    case 'heading-six':
      return <HTMLHeadingsElementsRender type={element.type} props={props} />;

    case 'paragraph':
      return <p>{children}</p>;

    case 'image':
      return (
        <Fragment>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...attributes}
            width={element.props.width}
            height={element.props.height}
            src={element.props.src}
            alt={element.props.alt}
          />
          {children}
        </Fragment>
      );
    case 'separator':
      return <hr {...attributes} />;
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'check-list':
      return (
        <div {...attributes}>
          <input type='checkbox' checked={element.checked} readOnly={true} />
          {children}
        </div>
      );
    case 'bulleted-lists':
      return (
        <ul {...attributes} style={{ textAlign: element.align }}>
          {children}
        </ul>
      );
    case 'numbered-lists':
      return (
        <ol {...attributes} style={{ textAlign: element.align }}>
          {children}
        </ol>
      );
    case 'code-block':
      return (
        <pre {...attributes} className='w-full bg-zinc-500'>
          <code>{children}</code>
        </pre>
      );
    case 'link':
      return (
        <a
          className='text-lime-500 underline'
          {...attributes}
          href={element.props.href}
          target={element.props.target}
          rel={element.props.rel}
        >
          {children}
        </a>
      );

    case 'list':
      return <li {...attributes}>{children}</li>;
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
    // case 'column-item':
    //   return <p>{children}</p>;
    // case 'column-layout':
    //   return <p>{children}</p>;
    default:
      <DefaultElement {...props} />;
  }
};

export default RenderHtmlElements;
