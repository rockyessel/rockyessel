'use client';

import { ListType, RenderProps } from '@/components/editor/types';
import {
  useReadOnly,
} from 'slate-react';
const HtmlLiElement = (props: RenderProps<ListType>) => {
  const { attributes, children, element } = props;
const readOnly = useReadOnly();
  return (
    <li style={{ textAlign: element.align }} {...attributes}>
      {children}
    </li>
  );
};

export default HtmlLiElement;
