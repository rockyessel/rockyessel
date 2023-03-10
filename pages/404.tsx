import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter().asPath;

  return (
    <Layout
      description={'The page you are looking for was not found.'}
      title={'Page Not Found'}
      image={'https://esselr.vercel.app/images/notfoundpage.PNG'}
      type={'Website'}
      alt={'Page Not Found'}
      keywords={'Page Not Found'}
      publishedAt={new Date().toISOString()}
      updatedAt={new Date().toISOString()}
      MIME={'png'}
      author_name={'Rocky Essel'}
    >
      <main className='w-full h-[79.2vh] px-4'>
        <section className=' flex flex-col justify-center mt-5 md:mt-28 items-center gap-3'>
          <p className='text-7xl '>404</p>
          <div className='flex-col justify-center items-center gap-2 text-lg prose-xl'>
            <p>
              The page you&apos;re requesting has been block or the URL has been
              changed.
            </p>
            <p>
              If this page result as clicking on an internal of this web
              application.
            </p>
            <p>
              Kindly contact us, so we can fix this ASAP! essel_r@outlook.com or
              contact has through the{' '}
              <Link className='underline' href='/contact'>
                form
              </Link>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NotFound;
