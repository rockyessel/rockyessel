import React from 'react';
import Image from 'next/image';
import { ProfileCard, ShareButton } from '../index';
import { PortableText } from '@portabletext/react';
import moment from 'moment';
import { CodeBlocks } from '@/utils/services';

const NoteDetailCard = ({ data }: any) => {

  return (
    <React.Fragment>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h1 className='font-extrabold max_screen:text-4xl text-7xl capitalize'>
            {data?.title}
          </h1>

          <ShareButton text={data?.title} />
          <p className='font-medium inline-flex items-center gap-5 max_screen:text-xs'>
            <span>{moment(data?.publishedAt).format('MMM Do YY')}</span>
            <span>{data?.estimated_reading_time} Minutes</span>
          </p>
        </div>

        <div>
          <Image
            className='w-full rounded-md mb-4 shadow-md'
            src={data?.image}
            width={1000}
            height={1000}
            alt={data?.title}
          />
        </div>
      </div>
      <article className='prose-xl mb-5 text-white text-lg'>
        <PortableText value={data?.body} components={CodeBlocks} />
      </article>
    </React.Fragment>
  );
};

export default NoteDetailCard;
