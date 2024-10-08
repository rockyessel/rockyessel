'use client';

import {
  createOgImage,
  toSafeBase64Url,
  urlToBase64,
} from '@/lib/utils/helpers';
import { useEffect, useState, useMemo } from 'react';

interface Props {
  title?: string;
  meta?: string[];
  image?: string;
}

export const useGenOgImage = ({ title, meta, image }: Props = {}) => {
  const [ogImage, setOgImage] = useState<string>('');

  const profileImage =
    'https://avatars.githubusercontent.com/u/97303710?s=400&u=bf45658532dceeaa02804dcb458f09189dbe6e77&v=4';
  const imageURL = image || profileImage;

  // Set default values for title and meta
  const ogTitle = title || 'Untitled';
  const ogMeta =
    meta && meta.length > 0
      ? meta.join(' · ')
      : ['rockyessel.me', '4 Jul', 'quantum', 'robotics'].join(' · ');

  const ogImageMemo = useMemo(() => {
    return createOgImage({
      title: ogTitle,
      meta: ogMeta,
      image: imageURL,
    });
  }, [imageURL, ogMeta, ogTitle]);

  useEffect(() => {
    const fetchOgImage = () => {
      const newOgImage = ogImageMemo;
      setOgImage(newOgImage);
    };

    if (typeof window !== 'undefined') {
      fetchOgImage();
    }
  }, [ogImageMemo]);

  return { ogImage };
};
