import { Layout } from '@/components';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { ResumeQuery } from '@/utils/query';
import { ResumeQueryProps } from '@/interface';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { CodeBlocks } from '@/utils/services';

const Resume = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {

  return (
    <Layout
      description={props?.resume_data[1]?.description}
      title={props?.resume_data[1]?.title}
      image={'https://esselr.vercel.app/images/resumepage.PNG'}
      type={'Resume'}
      alt={'my-resume'}
      keywords={'my resume, portfolio,seeking job'}
      publishedAt={props?.resume_data[1]?._createdAt}
      updatedAt={props?.resume_data[1]?._updatedAt}
      MIME={'png'}
      author_name={'Rocky Essel'}
    >
      <main className='max_screen:w-full max_screen:px-4 px-4 xl:w-[70rem] mx-auto mt-5 md:mt-28'>
        <article className='prose-xl text-white text-xl'>
          <PortableText
            value={props?.resume_data[1]?.body}
            components={CodeBlocks}
          />
        </article>

        <div className='mt-10 flex items-center gap-2'>
          <Link href='/contact'>
            <button
              title='Contact me'
              type='button'
              className=' hover:scale-[1.1] md:ml-6 origin-center hover:origin-top transition-all duration-500 after:hover:re_li w-fit font-bold relative text-decoration-none after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-2 after:bg-rose-500'
            >
              Contact me
            </button>
          </Link>

          <a href='/RockyEssel.pdf' download>
            <button
              title='Download'
              type='button'
              className=' hover:scale-[1.1] md:ml-6 origin-center hover:origin-top transition-all duration-500 after:hover:re_li w-fit font-bold relative text-decoration-none after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-2 after:bg-rose-500'
            >
              Download Resume
            </button>
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default Resume;

export const getStaticProps: GetStaticProps<{ resume_data: ResumeQueryProps[] }> = async () => {
  const resume_data: ResumeQueryProps[] = await ResumeQuery();

  if (!resume_data) return { notFound: true };

  return {
    props: { resume_data: JSON.parse(JSON.stringify(resume_data)) },
    revalidate: 10,
  };
};
