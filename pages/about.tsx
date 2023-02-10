import { Layout, SkillsCard } from '@/components';
import React from 'react';

const About = () => {
  return (
    <Layout
      description={`I am a front-end developer with experience building
                web applications. I have a passion for creating a better web,
                with a focus on speed, ease of use, aesthetic design,`}
      title={'About Rocky Essel'}
      image={''}
      type={'Website'}
      alt={'about-me-rocky-essel'}
      keywords={'rocky essel, esselr,essel_r,rocky,essel'}
      publishedAt={new Date().toISOString()}
      updatedAt={new Date().toISOString()}
      MIME={'png'}
      author_name={'Rocky Essel'}
    >
      <main className='max_screen:w-full max_screen:px-4 w-[40rem] mx-auto'>
        <section className='flex flex-col gap-10'>
          <div className='flex flex-col gap-10'>
            <p className='font-bold font-noe text-5xl md:text-7xl capitalize'>
              About Rocky Essel
            </p>
            <div className='prose text-white'>
              <p>
                I am a front-end developer with experience building web
                applications. I have a passion for creating a better web, with a
                focus on speed, ease of use, aesthetic design, accessibility,
                and user satisfaction.
              </p>

              <p>
                My goal is to develop websites and web applications that meet
                the needs of businesses while providing a seamless and enjoyable
                user experience. In addition to my front-end development skills,
                I have a solid understanding of the backend, which allows me to
                bring a well-rounded approach to my projects. I believe that the
                combination of front-end and backend expertise allows me to
                create web applications that are both functional and visually
                appealing.
              </p>

              <p>
                I am always seeking to expand my skills and knowledge in the
                field of web development. I stay up-to-date with the latest
                technologies and best practices, ensuring that my clients
                receive the highest quality results. My commitment to excellence
                is evident in every project I work on, from concept to
                deployment. Whether working on a small website or a complex web
                application, I bring my passion for creating the best possible
                web experience to every project.
              </p>
              <p>
                I am confident in my ability to deliver results that meet or
                exceed my clients&apos; expectations.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-10'>
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
        </section>
      </main>
    </Layout>
  );
};

export default About;
