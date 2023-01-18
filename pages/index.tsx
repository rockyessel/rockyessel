import { Layout, ProjectCard, SkillsCard } from '@/components';

export default function Home() {
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
      <section className='px-6 flex flex-col gap-10'>
        <div>
          <p className='font-extrabold text-3xl capitalize'>Nice to meet you</p>
          <div className='prose'>
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

        <div>
          <p className='font-extrabold text-3xl capitalize'>Skills</p>
          <SkillsCard />
        </div>

        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2.5'>
            <p className='font-extrabold text-3xl capitalize'>
              Professional Work
            </p>

            <div className='flex flex-col gap-5'>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>

          <div className='flex flex-col gap-2.5'>
            <p className='font-extrabold text-3xl capitalize'>Side Projects</p>

            <div className='flex flex-col gap-5'>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>

          <div className='flex flex-col gap-2.5'>
            <p className='font-extrabold text-3xl'>Thoughts/Notes</p>

            <div className='flex flex-col gap-5'>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
