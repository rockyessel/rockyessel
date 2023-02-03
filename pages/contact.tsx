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
      <main className='max_screen:w-full max_screen:px-4 w-[40rem] mx-auto'>
        <section className='flex flex-col gap-10'>
          <p className='font-bold font-noe text-5xl md:text-7xl capitalize'>
            Reach out to me
          </p>

          <p className='text-lg md:text-2xl font-light'>
            Send a general message or details of a project you&apos;d like me to be a
            part of and I&apos;ll get back to you as soon as possible.
          </p>

          <Form />
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
