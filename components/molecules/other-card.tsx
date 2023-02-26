import Image from 'next/image';
import React from 'react';
import { data_list } from '@/utils/services';
import Link from 'next/link';
import { AiFillFolderOpen } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { SiWebmoney } from 'react-icons/si';

const OtherCard = ({ data }: { data: any }) => {
  const included_tags = data?.tags?.split(',');
  const MAX_TITLE: number = 70;
  const MAX_DESCRIPTION: number = 200;

  const sliceDes: string = `${data?.description?.slice(0, MAX_DESCRIPTION)}...`;
  const sliceTitle: string = `${data?.title?.slice(0, MAX_TITLE)}...`;

  const isTitleLonger: boolean = data?.title?.length > MAX_TITLE;
  const isDesLonger: boolean = data?.description?.length > MAX_DESCRIPTION;

  return (
    <div className='group bg-[#18202b]  md:bg-transparent w-full h-auto relative cursor-pointer rounded-md items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
      <div className='hidden md:block md:h-[15rem] w-full'>
        <Image
          className='hidden md:block h-full w-full rounded-md object-cover object-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
          src={data?.image[0]}
          alt=''
          width={1000}
          height={1000}
        />
      </div>
      <div className='md:absolute hidden md:block inset-0 group-hover:backdrop-blur-[2px] bg-gradient-to-b from-transparent via-[#18202b]/90 to-[#18202b] group-hover:from-[#18202b]/[1] group-hover:via-[#18202b]/80 group-hover:to-[#18202b]/[1]'></div>

      <div className='md:absolute w-full h-auto md:inset-0 flex md:translate-y-[50%] flex-col items-start p-4 transition-all duration-500 md:group-hover:translate-y-0'>
        <div>
          <h1 className='font-noe text-lg md:text-3xl font-bold'>
            {isTitleLonger ? sliceTitle : data?.title}
          </h1>

          <ul className='flex flex-wrap items-center gap-2'>
            {data_list?.map((list, index) =>
              included_tags?.includes(list.name) ? (
                <Link
                  key={index}
                  href={`/project/${list.name.toLocaleLowerCase()}`}
                >
                  <li
                    className='tooltip text-xs text-rose-500 cursor-pointer inline-flex items-center gap-1 border border-white p-1 font-medium'
                    data-tip={list?.name}
                  >
                    {list?.icon} {list?.name}
                  </li>
                </Link>
              ) : null
            )}
          </ul>
        </div>

        <p className='mb-3 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100'>
          {isDesLonger ? sliceDes : data?.description}
        </p>

        <div className='w-full flex justify-between items-center text-[2.6rem]'>
          <div className='flex items-center gap-5'>
            <a
              title='Github'
              target={`_blank`}
              href={`${data?.github_project_url}`}
            >
              <span className='tooltip' data-tip='Github'>
                <BsGithub className='p-1 rounded-md' />
              </span>
            </a>

            <a
              title='Live Website'
              target={`_blank`}
              href={`${data?.live_website}`}
            >
              <span className='tooltip' data-tip='Live Website'>
                <SiWebmoney className='p-1 rounded-md' />
              </span>
            </a>
          </div>

          <div className='group flex items-center gap-5'>
            <Link href={`/projects/${data?.slug?.current}#project`}>
              <span className='tooltip' data-tip='Open For More Details'>
                <AiFillFolderOpen className='p-1 rounded-md' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCard;
