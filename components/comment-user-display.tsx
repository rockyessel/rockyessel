import Image from 'next/image';
import React from 'react';
import moment from 'moment';

type Props = {
  data: {
    name: string;
    profile: string;
    _createdAt: string;
    comment: string;
  };
};

const CommentUserDisplay = (props: Props) => {
    
  return (
    <div className={`flex flex-col gap-2.5 my-5`}>
      <div className='flex items-center space-x-4'>
        <Image
          width={100}
          height={100}
          className='w-12 h-12 rounded-full border-2 border-black'
          src={props?.data?.profile}
          alt=''
        />
        <div className='font-medium dark:text-white'>
          <div>{props?.data?.name}</div>
          <div className='text-sm  '>
            {moment(props?.data?._createdAt).format('LLL')}
          </div>
        </div>
      </div>

      <div
        className={`relative w-full h-full after:content-[''] after:absolute after:left-4 after:-top-[0%] after:-translate-y-[100%] after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-slate-900`}
      >
        <p
          className={`w-[100%] bg-rose-300 border border-black h-auto p-4 rounded-md`}
        >
          {props?.data?.comment}
        </p>
      </div>
    </div>
  );
};

export default CommentUserDisplay;
