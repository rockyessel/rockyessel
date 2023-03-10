import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components';

const NotFound = () => {
  const router = useRouter().asPath;

  return (
    <Layout
      description={'The page you are looking for was not found.'}
      title={'Page Not Found'}
      image={''}
      type={'Website'}
      alt={'Page Not Found'}
      keywords={'Page Not Found'}
      publishedAt={new Date().toISOString()}
      updatedAt={new Date().toISOString()}
      MIME={'png'}
      author_name={'Rocky Essel'}
    >
      <main className='w-full h-full flex justify-center items-center'>
        <p className='text-7xl '>404</p>
      </main>
    </Layout>
  );
};

export default NotFound;
