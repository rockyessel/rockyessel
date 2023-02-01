import { Layout, SkillsCard } from '@/components';
import React from 'react';

const About = () => {
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
          <p className='font-extrabold font-noe text-7xl capitalize'>
            Nice to meet you again!
          </p>
          <div className='prose text-white'>
            <p>
              Hi, I&apos;m Lorre. I live in London 🇬🇧. I&apos;m a Dad who loves
              code and design.
            </p>

            <p>
              I am passionate about modern open-source technologies such as
              JavaScript, Typescript, React, NextJs, Astro, Solid-JS, Tailwind,
              SASS, Zustand and many more.
            </p>

            <p>
              I pride myself on writing scalable, elegant, test-driven code,
              Creating with tried and tested design principles to create simple
              solutions to complex problems.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-1'>
            <p className='font-extrabold text-3xl capitalize'>Skills</p>
            <SkillsCard />
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-extrabold text-3xl capitalize'>
              Tools & Platforms
            </p>
            <SkillsCard />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
