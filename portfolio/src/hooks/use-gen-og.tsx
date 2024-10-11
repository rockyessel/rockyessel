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

export const useGenOgImage = ({ title, meta }: Props = {}) => {
  const [ogImage, setOgImage] = useState<string>('');

  // Set default values for title and meta
  const ogTitle = title || 'Untitled';
  const ogMeta =
    meta && meta.length > 0 ? meta.join(' · ') : ['rockyessel.me', '4 Jul', 'quantum', 'robotics'].join(' · ');

  const ogImageMemo = useMemo(() => {
    return createOgImage({
      title: ogTitle,
      meta: ogMeta,
    });
  }, [ogMeta, ogTitle]);

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
