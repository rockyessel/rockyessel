import React from 'react';
import { Form, Layout } from '@/components';

const Contact = () => {
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
      <main className='w-full h-full flex flex-col gap-10 px-4 lg:px-14 xl:px-20 2xl:px-40 lg:container md:mx-auto pb-5'>
        <p className='font-extrabold font-noe text-7xl capitalize'>
          Reach out to me
        </p>

        <Form />
      </main>
    </Layout>
  );
};

export default Contact;
