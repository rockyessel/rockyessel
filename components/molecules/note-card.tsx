import React from 'react';
import { AiOutlineComment, AiOutlineEye } from 'react-icons/ai';
import {
  MdOutlineReadMore,
  MdOutlineRecommend,
  MdFeaturedPlayList,
} from 'react-icons/md';
import Link from 'next/link';
import { data_list } from '@/utils/services';
import { NoteCardProps } from '@/interface';
import { AbbrevNumber } from '@/utils/function';
import Image from 'next/image';

const NoteCard = ({ data }: { data: NoteCardProps }): JSX.Element => {
  const included_tags = data?.tags?.split(',');

  const view_count = AbbrevNumber(data?.viewCount);

  const MAX_TITLE: number = 70;
  const MAX_DESCRIPTION: number = 157;

  const sliceDes: string = `${data?.description?.slice(0, MAX_DESCRIPTION)}...`;
  const sliceTitle: string = `${data?.title?.slice(0, MAX_TITLE)}...`;

  const isTitleLonger: boolean = data?.title?.length > MAX_TITLE;
  const isDesLonger: boolean = data?.description?.length > MAX_DESCRIPTION;

  return (
    <Link href={`/thoughts/${data?.slug?.current}`}>
      <li className='group bg-[#18202b] md:bg-transparent w-full h-auto relative cursor-pointer rounded-md items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-[#18202b]/30'>
        <div className='hidden md:block md:h-[15rem] w-full'>
          <Image
            className='hidden md:block h-full w-full rounded-md object-cover object-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
            src={data?.image}
            alt=''
            width={1000}
            height={1000}
          />
        </div>

        <div className='md:absolute hidden md:block inset-0 group-hover:backdrop-blur-[2px] bg-gradient-to-b from-transparent via-[#18202b]/90 to-[#18202b] group-hover:from-[#18202b]/[1] group-hover:via-[#18202b]/80 group-hover:to-[#18202b]/[1]'></div>

        <div className='md:absolute w-full h-auto md:inset-0 flex md:translate-y-[40%] flex-col items-start p-4 transition-all duration-500 md:group-hover:translate-y-0'>
          <div className='flex gap-2 items-center'>
            <div className='font-medium rounded-md after:content-["・"] after:pl-2 after:text-xs after:mb-5'>
              <span>{data?.estimated_reading_time} Minutes Read</span>
            </div>

            <div className={`flex gap-2 items-center font-medium`}>
              <span className={`inline-flex items-center rounded-md gap-1`}>
                <AiOutlineComment className={`text-lg`} />
                {data?.comment?.length}
              </span>

              <span className={`inline-flex items-center rounded-md gap-1`}>
                <AiOutlineEye className={`text-lg`} />
                {view_count}
              </span>

              <div className='flex items-center gap-1 text-[1.8rem]'>
                {data?.featured && (
                  <span
                    className='text-green-800 p-1 rounded-md font-medium '
                    title='Featured'
                  >
                    <MdFeaturedPlayList />
                  </span>
                )}
                {data?.recommended && (
                  <span
                    className='text-rose-800 p-1 rounded-md font-medium '
                    title='Recommended'
                  >
                    <MdOutlineRecommend />
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-0'>
            <div className='m-0 p-0'>
              <h1 className='font-noe text-lg font-bold'>
                {isTitleLonger ? sliceTitle : data?.title}
              </h1>
              <p className='md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100'>
                {isDesLonger ? sliceDes : data?.description}
              </p>
            </div>

            <div className='flex justify-between items-center text-[2.6rem]'>
              <ul className='rounded-md py-2 flex flex-wrap gap-1 items-center'>
                {data_list?.map((list, index) =>
                  included_tags?.includes(list.name) ? (
                    <Link
                      key={index}
                      href={`/project/${list.name.toLocaleLowerCase()}`}
                    >
                      <li
                        className=' text-xs cursor-pointer inline-flex items-center gap-1 border border-rose-500 text-white p-1 font-medium'
                        title={list?.name}
                      >
                        {list?.icon} {list?.name}
                      </li>
                    </Link>
                  ) : null
                )}
              </ul>

              <div className='group flex items-center gap-5'>
                <Link href={`/thoughts/${data?.slug?.current}`}>
                  <span title='Read more'>
                    <MdOutlineReadMore />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default NoteCard;
