import React from 'react';
import Image from 'next/image';
import { ProfileCard, ShareButton } from './index';
import { CodeProps, SanityImageProps, SanityTableProps } from '@/interface';
import { PortableText } from '@portabletext/react';
import moment from 'moment';

const NoteDetailCard = ({ data }: any) => {
  const CodeBlocks = {
    types: {
      code: ({ value }: { value: CodeProps }) => (
        <pre>
          <code>{value?.code}</code>
        </pre>
      ),
      image: ({ value }: { value: SanityImageProps }) => (
        <Image
          className='m-0 p-0'
          src={value?.image.url}
          alt={data?.alt}
          width={value?.image?.metadata?.dimensions?.width}
          height={value?.image?.metadata?.dimensions?.height}
        />
      ),
      table: ({ value }: { value: SanityTableProps }) => (
        <table>
          {value?.rows?.map((row, index) => (
            <tr key={index}>
              <th>{row?.cells[0]}</th>
              {row?.cells?.slice(1, row?.cells?.length)?.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
      ),
    },

    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/')
          ? 'noopener'
          : 'noreferrer noopener';

        console.log('rel', rel);
        return (
          <a
            className='text-blue-500 font-bold italic text-lg'
            href={value.href}
            rel={rel}
          >
            {children}
          </a>
        );
      },

      strong: ({ children, value }: any) => (
        <strong className='text-[#ff5277] text-lg'>{children}</strong>
      ),
    },

    block: {
      h1: ({ children, value }: any) => (
        <h1 className='text-[#ff5277] text-[2rem] mb-0'>{children}</h1>
      ),
      h2: ({ children, value }: any) => (
        <h1 className='text-[#ff5277] text-[1.8rem] mb-0'>{children}</h1>
      ),
      h3: ({ children, value }: any) => (
        <h1 className='text-[#ff5277] text-[1.6rem] mb-0'>{children}</h1>
      ),
      h4: ({ children, value }: any) => (
        <h1 className='text-[#ff5277] text-[1.4rem] mb-0'>{children}</h1>
      ),
      h5: ({ children, value }: any) => (
        <h1 className='text-[#ff5277] text-[1.2rem] mb-0'>{children}</h1>
      ),
      h6: ({ children, value }: any) => (
        <h1 className='text-[#ff5277] text-[1.rem] mb-0'>{children}</h1>
      ),
    },
  };

  return (
    <React.Fragment>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h1 className='font-extrabold max_screen:text-4xl text-7xl font-noe capitalize'>
            {data?.title}
          </h1>

          <ShareButton text={data?.title} />
          <p className='font-medium inline-flex items-center gap-5 max_screen:text-xs'>
            <span>{moment(data.publishedAt).format('MMM Do YY')}</span>
            <span>{data?.estimated_reading_time} Minutes</span>
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
        <article className='prose mb-5 text-white text-lg'>
          <PortableText value={data?.body} components={CodeBlocks} />
        </article>
        <div className='w-full flex justify-center items-center'>
          <ProfileCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoteDetailCard;
