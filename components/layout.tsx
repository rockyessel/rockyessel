import React from 'react';
import { Head, SubNavbar } from './index';
import Image from 'next/image';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SiMicrosoftoutlook } from 'react-icons/si';
import { LayoutProps } from '@/interface';

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Head
        description={props?.description}
        title={props?.title}
        image={props?.image}
        type={props?.type}
        alt={props?.alt}
        keywords={'cars,books,shoes,sex,bad,cats'}
        publishedAt={props?.publishedAt}
        updatedAt={props?.updatedAt}
        MIME={props?.MIME}
        author_name={props?.author_name}
      />

      <main className='bg-orange-300 w-full flex flex-col md:w-2/5 h-auto rounded-md shadow-lg -translate-y-40 pb-10'>
        <div className='absolute top-0 left-0 -ml-4 -mt-4 z-[2]'>
          <div className='bg-white rounded-full h-12 w-12 flex items-center justify-center'>
            <svg
              className='h-6 w-6 text-indigo-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
              />
            </svg>
          </div>
        </div>

        <section className='w-full relative'>
          <div>
            <div className='w-full h-40 overflow-hidden rounded-t-md'>
              <Image
                className='absolute top-0 rounded-t-md w-full h-40 object-cover object-center'
                src='https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                width={1000}
                height={1000}
                alt=''
              />
            </div>
            <span className='absolute w-10 h-10  overflow-hidden inline-flex justify-center items-center -bottom-16 left-36 z-[2] border border-black bg-orange-200 rounded-full p-2'>
              🎈
            </span>
          </div>
        </section>

        <section className='px-6 flex flex-col'>
          <div className='-translate-y-20'>
            <div className='flex w-full items-center justify-between '>
              <div className='w-40 h-40'>
                <Image
                  className='w-full h-full rounded-full border-4 border-gray-200'
                  src='https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  width={1000}
                  height={1000}
                  alt=''
                />
              </div>
              <div className='w-fit'>
                <button className='px-4 py-2 bg-orange-200 font-medium rounded-md'>
                  Get In Touch
                </button>
              </div>
            </div>

            <div>
              <div>
                <p className='font-extrabold uppercase text-4xl'>Rocky Essel</p>
                <p>
                  Web Developer. <span>View Resume</span>
                </p>
                <p>
                  I also write, research,and share my thought and love music.
                </p>
                <p className='inline-flex items-center gap-1 text-4xl'>
                  <SiMicrosoftoutlook />
                  essel_r@outlook.com
                </p>
              </div>

              <div>
                <ul>
                  <li>Archive</li>
                </ul>
              </div>

              <div className='flex items-center gap-2 text-4xl'>
                <a href='#'>
                  <BsGithub />
                </a>
                <a href='#'>
                  <BsTwitter />
                </a>
                <a href='#'>
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </section>

        <SubNavbar />

        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
