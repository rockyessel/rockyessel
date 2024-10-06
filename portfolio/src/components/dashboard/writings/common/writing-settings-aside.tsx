'use client';

import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGenOgImage } from '@/hooks/use-gen-og';
import Image from 'next/image';

const WritingSettingsAside = () => {
  const { ogImage } = useGenOgImage();
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
          <p className='text-lg font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            sapiente exercitationem, delectus, ipsa repudiandae minus similique
            velit nam soluta cumque facere provident corporis ab ipsum dicta
            adipisci quod quidem totam!
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
