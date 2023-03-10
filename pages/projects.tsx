import { Layout } from '@/components';
import OtherCard from '@/components/molecules/other-card';
import { HomeProps } from '@/interface';
import { PortfolioData } from '@/utils/query';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

const Projects = (
  props: InferGetServerSidePropsType<typeof getStaticProps>
) => {
  return (
    <Layout
      description={`Here, all projects on this section include tools, side projects,
            professional works,and other stuff that I created. So check tags for
            the specific project you want to open. And some of my projects have
            been archived.`}
      title={'All Showcase - @rockyessel'}
      image={'images/projectpage.PNG'}
      type={'Projects'}
      alt={'All Showcase - @rockyessel'}
      keywords={'professional project, side projects, react.js, next.js'}
      publishedAt={''}
      updatedAt={''}
      MIME={'png'}
      author_name={'Rocky Essel'}
    >
      <main className='w-full h-full flex flex-col gap-10 px-4 lg:px-14 xl:px-20 2xl:px-40 lg:container md:mx-auto pb-5 mt-5 md:mt-28'>
        <div>
          <p className='font-bold text-5xl md:text-7xl capitalize'>
            Just saying...
          </p>
          <p className=' text-lg md:text-2xl font-light'>
            Nice to meet you again! These are all the projects that was designed
            and developed by me. Check them out and let me know what you think.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-2.5`}
        >
          {props?.project_data?.map((data, index) => (
            <OtherCard key={index} data={data} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps<{
  project_data: HomeProps[];
}> = async () => {
  const project_data: HomeProps[] = await PortfolioData();

  return {
    props: JSON.parse(JSON.stringify({ project_data })),
    revalidate: 10,
  };
};
