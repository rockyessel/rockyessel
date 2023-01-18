import React from 'react';
import { Layout, ProjectCard, SkillsCard } from '@/components';

const Notes = () => {
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
      <section className='px-6  flex flex-col gap-10'>
        <div>
          <p className='font-extrabold text-3xl capitalize'>short note</p>
          <p>
            Whenever I&apos;m while building project, and find a break-through,
            I share them here, so that no web developer starting out don&apos;t
            have to suffer. Every information write here, has been through a lot
            of research, so reference are made available if you want to check
            them out.
          </p>
        </div>

        <div className='flex flex-col gap-5'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </Layout>
  );
};

export default Notes;
