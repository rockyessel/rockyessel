import React from 'react';
import {  ProfileCard } from './index';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import {
  CodeProps,
  HomeProps,
  SanityImageProps,
  SanityTableProps,
} from '@/interface';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { data_list } from '@/utils/services';

const ProjectDetailsCard = ({ data }: { data: HomeProps }) => {
  const [image, setImage] = React.useState<number>(0);

  const included_tags = data?.tags?.split(',');
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
          alt={value?.alt}
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
      <div className='flex flex-col gap-2'>
        <h1 className='font-extrabold max_screen:text-4xl text-7xl capitalize font-noe'>
          {data?.title}
        </h1>
        <div className='flex items-center justify-between gap-2 w-full flex-wrap mb-2'>
          <a target={`_blank`} href={data?.live_website}>
            <span className='inline-flex items-center gap-1 p-2 w-fit border border-[#ff5277] text-[#ff5277] rounded-md'>
              See Live <FiExternalLink />
            </span>
          </a>
          <a target={`_blank`} href={data?.github_project_url}>
            <span className='inline-flex items-center gap-1 p-2 w-fit border border-[#ff5277] text-[#ff5277] rounded-md'>
              Github <FiExternalLink />
            </span>
          </a>
        </div>
        <div className='flex flex-col flex-wrap gap-1'>
          <div>
            <ul className='rounded-md py-2 flex flex-wrap gap-2 items-center'>
              {data_list?.map((list, index) =>
                included_tags?.includes(list.name) ? (
                  <Link
                    key={index}
                    href={`/project/${list.name.toLocaleLowerCase()}`}
                  >
                    <li
                      className='tooltip cursor-pointer inline-flex items-center gap-1 border border-white text-[#ff5277] p-1 font-medium'
                      data-tip={list?.name}
                    >
                      {list?.icon} {list?.name}
                    </li>
                  </Link>
                ) : null
              )}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <Image
          className='rounded-md mb-4 shadow-md'
          src={data?.image[image]}
          width={1000}
          height={1000}
          alt=''
        />
      </div>

      <div className='flex items-center gap-2'>
        {data?.image?.map((img, index) => (
          <Image
            key={index}
            className='rounded-md mb-4 w-20 shadow-md'
            src={img}
            width={1000}
            height={1000}
            onClick={() => setImage(index)}
            alt={data?.title}
          />
        ))}
      </div>

      <div>
        <article className='prose mb-5 text-gray-300'>
          <PortableText value={data?.body} components={CodeBlocks} />
        </article>
        <div>
          <ProfileCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectDetailsCard;
