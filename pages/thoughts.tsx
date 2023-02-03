import { Layout, NoteCard } from '@/components';
import { NoteCardProps } from '@/interface';
import { NoteData } from '@/utils/query';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

const Thoughts = (
  props: InferGetServerSidePropsType<typeof getStaticProps>
) => {
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
        <div>
          <p className='font-bold font-noe text-5xl md:text-7xl capitalize'>
            short note
          </p>
          <p>
            Whenever I&apos;m while building project, and find a break-through,
            I share them here, so that no web developer starting out don&apos;t
            have to suffer. Every information write here, has been through a lot
            of research, so reference are made available if you want to check
            them out.
          </p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-2.5 overflow-hidden'>
          {props?.thoughts_data?.slice(0, 4)?.map((data, index) => (
            <NoteCard key={index} data={data} />
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Thoughts;

export const getStaticProps: GetStaticProps<{
  thoughts_data: NoteCardProps[];
}> = async () => {
  const thoughts_data: NoteCardProps[] = await NoteData();

  return {
    props: JSON.parse(JSON.stringify({ thoughts_data })),
  };
};
