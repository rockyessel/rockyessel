import React from 'react';
import { ProfileCard } from '../index';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { HomeProps } from '@/interface';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { CodeBlocks, data_list } from '@/utils/services';

const ProjectDetailsCard = ({ data }: { data: HomeProps }) => {
  const [image, setImage] = React.useState<number>(0);


  const included_tags = data?.tags?.split(',');

  return (
    <React.Fragment>
      <div className='flex flex-col gap-2'>
        <h1 className='font-extrabold max_screen:text-4xl text-7xl capitalize'>
          {data?.title}
        </h1>
        <div className='flex items-center justify-between gap-2 w-full flex-wrap mb-2'>
          <a target={`_blank`} href={data?.live_website}>
            <span className='inline-flex items-center gap-1 p-2 w-fit border border-rose-500 text-white rounded-md'>
              See Live <FiExternalLink />
            </span>
          </a>
          <a target={`_blank`} href={data?.github_project_url}>
            <span className='inline-flex items-center gap-1 p-2 w-fit border border-rose-500 text-white rounded-md'>
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
                      className='tooltip cursor-pointer inline-flex items-center gap-1 border border-rose-500 text-white p-1 font-medium'
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
          className='w-full rounded-md mb-4 shadow-md'
          src={data?.image[image]}
          width={1000}
          height={1000}
          alt=''
        />
      </div>

      <div className='flex flex-wrap items-center gap-2'>
        {data?.image?.map((img, index) => (
          <Image
            key={index}
            className='rounded-sm mb-4 w-10 sm:w-16 md:w-24 md:h-20 object-cover object-center shadow-md'
            src={img !== null ? img : ''}
            width={1000}
            height={1000}
            onClick={() => setImage(index)}
            alt={data?.title}
          />
        ))}
      </div>

      <div>
        <article className='prose-xl mb-5 text-gray-300'>
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
