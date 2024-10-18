'use client';

import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGenOgImage } from '@/hooks/use-gen-og';
import { createOgImage, truncate } from '@/lib/utils/helpers';
import { PostDraftType } from '@/types';
import Image from 'next/image';

interface Props {
  draft: PostDraftType;
}

const WritingSettingsAside = ({ draft }: Props) => {
  const tags = draft?.tags ? draft.tags.slice(0, 3) : [];

  const ogImage = createOgImage({
    title: draft?.title || '',
    meta: ['rockyessel.me', ...tags].join(' • '),
  });
  return (
    <div className='max-w-[20rem] w-full sticky top-16 flex flex-col gap-5'>
      <div>
        <div className='w-full flex items-center justify-center h-40'>
          <Image
            className='w-full h-full rounded-lg border-2 border-zinc-700/40'
            width={1000}
            height={1000}
            src={ogImage}
            alt={ogImage}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-lg font-semibold'>{draft?.title}</p>
          <p className='text-gray-400'>
            {truncate(draft?.description || '', 160)}
          </p>
        </div>
      </div>

      <TabsList className='w-full flex-col items-start gap-2'>
        <TabsTrigger value='general'>General</TabsTrigger>
        <TabsTrigger disabled value='translation'>
          Translation
        </TabsTrigger>
        <TabsTrigger value='seo'>SEO</TabsTrigger>
        <TabsTrigger value='comments'>Comments</TabsTrigger>
      </TabsList>
    </div>
  );
};

export default WritingSettingsAside;
