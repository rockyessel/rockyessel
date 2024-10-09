'use client';

import { BulletedListsType, RenderProps } from '@/components/editor/types';
import {Children} from 'react';

const HtmlUlElement = (props: RenderProps<BulletedListsType>) => {
  const { attributes, children, element } = props;

  return (
    <ul
      className='list-disc'
      style={{ textAlign: element.align }}
      {...attributes}
    >
      {children}
    </ul>
  );
};

export default HtmlUlElement;
