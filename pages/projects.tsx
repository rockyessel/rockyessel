import React from 'react';
import { Layout, ProjectCard, SkillsCard } from '@/components';

const Projects = () => {
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
            Here, all projects on this section include tools, side projects,
            professional works,and other stuff that I created. So check tags for
            the specific project you want to open. And some of my projects have
            been archived.
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

export default Projects;
