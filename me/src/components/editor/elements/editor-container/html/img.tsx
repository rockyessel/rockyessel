/* eslint-disable @next/next/no-img-element */
'use client';

import { ImageType, RenderProps } from '@/components/editor/types';
import { Fragment } from 'react';

const HtmlImageElement = (props: RenderProps<ImageType>) => {
  const { attributes, children, element } = props;

  const { props: props_ } = element;
  const { alt, height, src, width } = props_;

  return (
    <Fragment>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='relative w-full h-full'
        {...attributes}
      />

      {/* {children} */}
    </Fragment>
  );
};

export default HtmlImageElement;
