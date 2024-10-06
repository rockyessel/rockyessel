/* eslint-disable @next/next/no-img-element */
'use client';

import { ImageType, RenderProps } from '@/components/editor/types';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

const HtmlImageElement = (props: RenderProps<ImageType>) => {
  const { attributes, children, element } = props;
  const [isExternalImageLink, setIsExternalImageLink] = useState(false);

  const { props: props_ } = element;
  const { alt, height, src, width } = props_;

  const checkIfExternalImage = useCallback(() => {
    const isExternal = src.startsWith('http') || src.startsWith('https');
    const isInternalBafCID = src.startsWith('baf');
    setIsExternalImageLink(!isInternalBafCID && isExternal);
  }, [src]);

  useEffect(() => {
    checkIfExternalImage();
  }, [checkIfExternalImage]);

  return (
    <div className='relative flex flex-col gap-0' {...attributes}>
      {isExternalImageLink ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className='w-full h-full'
        />
      ) : (
        <Image
          alt={alt}
          width={width}
          height={height}
          className='w-full h-full'
          src={src}
        />
      )}
      <span
        {...attributes}
        className='w-full border border-lime-600 h-4 inline-flex items-center justify-center text-center font-light'
      >
        {children}
      </span>
    </div>
  );
};

export default HtmlImageElement;
