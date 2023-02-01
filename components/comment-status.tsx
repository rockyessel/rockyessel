import React from 'react';
import Image from 'next/image';
import { BiAddToQueue } from 'react-icons/bi';

const CommentStatus = ({
  setHide,
  data,
}: {
  data: any[];
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClose = () => {
    setHide((prev) => !prev);
  };

  return (
    <section
      id={`comment`}
      className={`sticky top-0 z-[3] w-full border border-black bg-rose-800 rounded-md h-auto flex flex-col gap-10 justify-center px-10 py-5`}
    >
      <div className={`flex items-center justify-between`}>
        <div
          className={`flex items-center ${
            data?.length > 3 ? ' divide-x divide-black' : null
          }`}
        >
          <div className='pr-5 flex flex-col items-center'>
            <div className='flex -space-x-4'>
              {data?.map((comment, index) => (
                <Image
                  key={index}
                  src={comment?.profile}
                  loading='lazy'
                  width={100}
                  height={100}
                  className='w-12 h-12 rounded-full border-2 border-slate-900'
                  alt={comment?.name}
                />
              ))}

              {data?.length > 3 && (
                <span className='w-12 h-12 bg-orange-300 inline-flex items-center justify-center rounded-full border-2 border-black '>
                  7+
                </span>
              )}
            </div>
          </div>

          <span className='pl-5 font-medium'>{data.length} comment</span>
        </div>

        <div className='flex items-center justify-center divide-x'>
          <button
            onClick={handleClose}
            title='Add comment'
            type={'button'}
            className=' inline-flex items-center p-2 font-medium  text-center bg-gradient-to-b from-rose-800 via-rose-700 border border-black to-rose-900 rounded-lg'
          >
            <span title='Add new comment'>
              <BiAddToQueue className={`text-[1.7rem]`} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentStatus;
