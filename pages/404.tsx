import React from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components';

const NotFound = () => {
  const router = useRouter().asPath;

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
      <section className='w-full h-full flex justify-center items-center'>
        <div>
          <span>404</span>
          <span>{router}</span>
          <span>Wasn&apos;t found</span>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
