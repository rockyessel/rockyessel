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
      description={`Whenever I&apos;m while building project, and find a break-through,
            I share them here, so that no web developer starting out don&apos;t
            have to suffer. Every information write here, has been through a lot
            of research, so reference are made available if you want to check
            them out.`}
      title={'All Thought'}
      image={'https://esselr.vercel.app/images/thoughtspage.PNG'}
      type={'Article'}
      alt={'all-thought'}
      keywords={'rust,TailwindCSS,html,css,python,js,ts,rs,yew'}
      publishedAt={new Date().toISOString()}
      updatedAt={new Date().toISOString()}
      MIME={'png'}
      author_name={'Rocky Essel'}
    >
      <main className='w-full h-full flex flex-col gap-10 px-4 lg:px-14 xl:px-20 2xl:px-40 lg:container md:mx-auto pb-5 mt-5 md:mt-28'>
        <div>
          <p className='font-bold text-5xl md:text-7xl capitalize'>
            Information to share
          </p>
          <p className=' text-lg md:text-2xl font-light'>
            As a developer, I love sharing breakthroughs and insights to help
            fellow web developers. All the information I share here is
            thoroughly researched and references are provided for further
            exploration. <span className='underline'>Sharing is caring</span>
          </p>
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-2.5 overflow-hidden'>
          {props?.thoughts_data?.map((data, index) => (
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
    revalidate: 10,
  };
};
