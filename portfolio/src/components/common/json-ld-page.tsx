'use client';

import { IPageJsonLd } from '@/types';

interface Props {
  jsonLd: IPageJsonLd;
}

const JsonLDPage = ({ jsonLd }: Props) => {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLDPage;
