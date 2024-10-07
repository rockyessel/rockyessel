'use client';

import './styles/index.css';
import { Descendant } from 'slate';
import { Locale } from '@/i18n.config';
import Elements from './elements';
import SymbionTextEditor from './slate/editor';
import SymbionEditorRender from './slate/render';
import { HTMLDivProps } from '@/types';

interface Props {
  locale?: Locale;
  readOnly?: boolean;
  onChange?: (value: Descendant[]) => void;
  className?: string;
  content?: Descendant[] | string;
  toolbar?: {
    className?: string;
  } & HTMLDivProps;
}

export const TextEditor = ({ content, className, ...props }: Props) => {
  const { locale = 'en', readOnly = false, onChange, toolbar } = props;
  const { eHtml, rHtml } = Elements();

  // const Render = (
  //   <SymbionEditorRender
  //     rHtml={rHtml}
  //     className={className}
  //     content={content}
  //   />
  // );

  // const Editor = (
  //   <SymbionTextEditor
  //     locale={locale}
  //     onChange={onChange}
  //     content={content}
  //     eHtml={eHtml}
  //     className={className}
  //     toolbar={toolbar}
  //   />
  // );

  // return {Render, Editor}

  return readOnly ? (
    <SymbionEditorRender
      rHtml={rHtml}
      className={className}
      content={content}
    />
  ) : (
    <SymbionTextEditor
      locale={locale}
      onChange={onChange}
      content={content}
      eHtml={eHtml}
      className={className}
      toolbar={toolbar}
    />
  );
};
