import React from 'react';
import { Layout, ProjectDetailsCard } from '@/components';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { BiAddToQueue } from 'react-icons/bi';

const ProjectDetails = () => {
  return (
    <Layout
      description={''}
      title={''}
      image={''}
      type={''}
      alt={''}
      keywords={''}
      publishedAt={''}
      updatedAt={''}
      MIME={''}
      author_name={''}
    >
      <section className='px-6'>
        <ProjectDetailsCard />
        <section className='flex flex-col gap-4'>
          <section
            id={`comment`}
            className={`z-[5] sticky top-20 w-full border border-black bg-orange-400 rounded-md h-auto flex flex-col gap-10 justify-center px-10 py-5`}
          >
            <div className={`flex items-center justify-between`}>
              <div className='flex items-center divide-x divide-black'>
                <div className='pr-5 flex flex-col items-center'>
                  <span className='flex -space-x-4'>
                    <Image
                      src=''
                      loading='lazy'
                      width={100}
                      height={100}
                      className='w-12 h-12 rounded-full border-2 border-slate-900'
                      alt=''
                    />

                    <span className='w-12 h-12 bg-orange-300 inline-flex items-center justify-center rounded-full border-2 border-black '>
                      7+
                    </span>
                  </span>
                </div>

                <span className='pl-5 font-medium'>656 comment</span>
              </div>

              <div className='flex items-center justify-center divide-x'>
                <button
                  title='jhjhj'
                  type={'button'}
                  className=' inline-flex items-center p-2 font-medium  text-center bg-gradient-to-b from-orange-800 via-orange-700 to-orange-900 rounded-lg'
                >
                  <span title='Add new comment'>
                    <BiAddToQueue className={`text-[1.7rem]`} />
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section
            className={`px-10 py-5 w-full border border-black bg-orange-400 rounded-md h-auto`}
          >
            <div className={`flex flex-col gap-2.5 my-5`}>
              <div className='flex items-center space-x-4'>
                <Image
                  width={100}
                  height={100}
                  className='w-12 h-12 rounded-full border-2 border-black'
                  src=''
                  alt=''
                />
                <div className='font-medium dark:text-white'>
                  <div>Rocky Essel</div>
                  <div className='text-sm  '>Mon 21:23</div>
                </div>
              </div>

              <div
                className={`relative w-full h-full after:content-[''] after:absolute after:left-4 after:-top-[0%] after:-translate-y-[100%] after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-slate-900`}
              >
                <p
                  className={`w-[100%] bg-orange-300 border border-black h-auto p-4 rounded-md`}
                >
                  Hello World
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </Layout>
  );
};

export default ProjectDetails;
