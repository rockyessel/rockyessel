import { NoteCard, Layout } from '@/components';
import OtherCard from '@/components/other-card';
import { HomeProps, NoteCardProps } from '@/interface';
import { NoteData, PortfolioData } from '@/utils/query';
import { data_list } from '@/utils/services';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdArrowForward } from 'react-icons/md';
import { SiMicrosoftoutlook } from 'react-icons/si';

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const [theme, setTheme] = React.useState<string>('light');

  React.useEffect(() => {}, [theme]);

  const professional_project: HomeProps[] = props?.project_data?.filter(
    (data) => data.type.replace(' ', '_').toLowerCase() === 'professional_work'
  );

  const side_project: HomeProps[] = props?.project_data?.filter(
    (data) => data.type.replace(' ', '_').toLowerCase() === 'side_project'
  );

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
      <main className='w-full h-full flex flex-col gap-20 px-4 lg:px-14 xl:px-20 2xl:px-40 lg:container md:mx-auto pb-5'>
        <section className=''>
          <div className='flex flex-col gap-5 mt-10 md:mt-28'>
            <div>
              <span className='uppercase text-xl font-bold text-[#ff5277]'>
                Hello, my name is rocky
              </span>

              <p className='font-bold font-noe text-5xl md:text-7xl'>
                Am a web developer
              </p>
            </div>

            <p className='text-lg md:text-2xl font-light'>
              I&apos;m a front-end developer and co-founder of Codista, a
              software studio in Vienna. I also write about the web on my blog
              and elsewhere.
            </p>
            <div>
              <p className=' text-lg md:text-2xl font-light'>
                Here are my tools:
              </p>
              <ul className='flex flex-wrap gap-2'>
                {data_list?.map((list, index) => (
                  <li
                    className='inline-flex items-center gap-1 border border-[#ff5277] p-2'
                    key={index}
                  >
                    {list.icon} {list.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex flex-col sm:flex-row sm:items-center gap-3 md:gap-5'>
              <div className='flex text-lg md:text-3xl gap-2'>
                <a
                  rel='noopener'
                  className='hover:scale-125 hover:text-[#ff5277] origin-center hover:origin-top transition-all duration-500'
                  target={`_blank`}
                  href='https://github.com/rockyessel'
                >
                  <BsGithub />{' '}
                </a>{' '}
                <a
                  rel='noopener'
                  className='hover:scale-125 hover:text-[#ff5277] origin-center hover:origin-top transition-all duration-500'
                  target={`_blank`}
                  href='https://twitter.com/rockyessel'
                >
                  <BsTwitter />{' '}
                </a>{' '}
                <a
                  rel='noopener'
                  className='hover:scale-125 hover:text-[#ff5277] origin-center hover:origin-top transition-all duration-500'
                  target={`_blank`}
                  href='https://www.linkedin.com/in/rockyessel/'
                >
                  <BsLinkedin />{' '}
                </a>
              </div>

              <Link href='/contact'>
                <button className='font-noe hover:scale-125 ml-6 origin-center hover:origin-top transition-all duration-500 text-3xl after:hover:re_li w-fit font-bold relative text-decoration-none after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-2 after:bg-[#ff5277]'>
                  Contact me
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-20'>
          <div className='flex flex-col gap-5 md:gap-2.5'>
            <p className='font-extrabold text-3xl capitalize'>
              Professional Work
            </p>
            <div
              className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-2`}
            >
              {professional_project.slice(0, 4)?.map((data, index) => (
                <OtherCard key={index} data={data} />
              ))}
            </div>

            <Link href='/projects'>
              <span className='float-right text-2xl font-bold font-noe inline-flex items-center group'>
                <span className='group-hover:text-rose-600'>
                  {' '}
                  View all projects
                </span>
                <MdArrowForward className='group-hover:ml-2 transition-all duration-500 group-hover:text-rose-600' />
              </span>
            </Link>
          </div>

          <div className='flex flex-col gap-5 md:gap-2.5'>
            <p className='font-extrabold text-3xl capitalize'>Side Projects</p>

            {!side_project.length ? (
              <p className=' text-lg md:text-3xl font-light'>
                No side project yet.
              </p>
            ) : (
              <ul className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-2'>
                {side_project?.slice(0, 2).map((data, index) => (
                  <OtherCard key={index} data={data} />
                ))}
              </ul>
            )}

            <Link href='/projects'>
              <span className='float-right text-2xl font-bold font-noe inline-flex items-center group'>
                <span className='group-hover:text-rose-600'>
                  {' '}
                  View all projects
                </span>
                <MdArrowForward className='group-hover:ml-2 transition-all duration-500 group-hover:text-rose-600' />
              </span>
            </Link>
          </div>

          <div className='w-full flex flex-col gap-5 md:gap-2.5'>
            <p className='font-extrabold text-3xl'>Thoughts</p>

            <ul className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-2 overflow-hidden'>
              {props?.note_data?.slice(0, 4)?.map((data, index) => (
                <NoteCard key={index} data={data} />
              ))}
            </ul>

            <Link href='/thoughts'>
              <span className='float-right text-2xl font-bold font-noe inline-flex items-center group'>
                <span className='group-hover:text-rose-600'>
                  View all Thoughts
                </span>
                <MdArrowForward className='group-hover:ml-2 transition-all duration-500 group-hover:text-rose-600' />
              </span>
            </Link>
          </div>
        </section>

        <section className='flex flex-col gap-2'>
          <p className='font-bold font-noe text-5xl md:text-7xl'>
            Get In touch
          </p>
          <p className=' text-lg md:text-2xl font-light'>
            Although I&apos;m currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className='flex items-center gap-2'>
            <div>
              <a
                className=' text-5xl hover:scale-125 hover:text-[#ff5277] origin-center hover:origin-top transition-all duration-500'
                href='mailto:essel_r@outlook.com'
              >
                <SiMicrosoftoutlook />
              </a>
            </div>

            <Link href='/contact'>
              <button className='font-noe hover:scale-125 ml-6 origin-center hover:origin-top transition-all duration-500 text-3xl after:hover:re_li w-fit font-bold relative text-decoration-none after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-2 after:bg-[#ff5277]'>
                Contact me
              </button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps<{
  project_data: HomeProps[];
  note_data: NoteCardProps[];
}> = async () => {
  const project_data: HomeProps[] = await PortfolioData();
  const note_data: NoteCardProps[] = await NoteData();

  if (!project_data || !note_data) return { notFound: true };

  return {
    props: JSON.parse(JSON.stringify({ project_data, note_data })),
  };
};

// vitals.vercel-insights.com
