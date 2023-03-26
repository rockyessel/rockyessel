import { Layout, FollowButton, Hero, Body } from '@/components';
import { HomeProps, NoteCardProps } from '@/interface';
import { NoteData, PortfolioData } from '@/utils/query';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

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
        <Hero />
        <Body {...props} />

        <section className='flex flex-col gap-2'>
          <p className='font-extrabold text-3xl capitalize'>Get In touch</p>
          <p className=' text-lg md:text-2xl font-light'>
            Although I&apos;m currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className='flex items-center gap-3 md:gap-5md:text-3xl text-2xl'>
            <FollowButton />
            <Link href='/contact'>
              <button
                title='Contact me'
                type='button'
                className=' hover:scale-[1.1] md:ml-6 origin-center hover:origin-top transition-all duration-500 after:hover:re_li w-fit font-bold relative text-decoration-none after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-2 after:bg-rose-500'
              >
                Contact me
              </button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps<{project_data: HomeProps[]; note_data: NoteCardProps[] }> = async () => {
  const project_data: HomeProps[] = await PortfolioData();
  const note_data: NoteCardProps[] = await NoteData();

  if (!project_data || !note_data) return { notFound: true };

  return {
    props: JSON.parse(JSON.stringify({ project_data, note_data })),
  };
};

// vitals.vercel-insights.com
