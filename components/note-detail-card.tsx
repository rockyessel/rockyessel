import React from 'react';
import Image from 'next/image';
import { ProfileCard, ShareButton } from './index';
import { CodeProps, NoteProps } from '@/interface';
import { PortableText } from '@portabletext/react';
import moment from 'moment';

const NoteDetailCard = ({ data }: any) => {
  const codeBlocks = {
    types: {
      code: ({ value }: CodeProps) => (
        <pre>
          <code>{value?.code}</code>
        </pre>
      ),
    },
  };
  // console.log('note_data', data);
  return (
    <React.Fragment>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h1 className='font-extrabold text-3xl capitalize'>{data?.title}</h1>

          <ShareButton text={data?.title} />
          <p className='font-medium inline-flex items-center gap-5'>
            <span>{moment(data.publishedAt).format('MMM Do YY')}</span>
            <span>{data?.estimated_reading_time} Mins</span>
          </p>
        </div>

        <div>
          <Image
            className='rounded-md mb-4 shadow-md'
            src={data?.image}
            width={1000}
            height={1000}
            alt={data?.alt}
          />
        </div>
      </div>
      <div>
        <article className='prose mb-5'>
          <PortableText value={data?.body} components={codeBlocks} />
        </article>
        <div className='w-full flex justify-center items-center'>
          <ProfileCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteDetailCard;
