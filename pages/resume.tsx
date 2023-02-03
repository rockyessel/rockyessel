import { Layout } from '@/components';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { ResumeQuery } from '@/utils/query';
import {
  ResumeQueryProps,
  SanityTableProps,
  SanityImageProps,
  CodeProps,
} from '@/interface';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

const Resume = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const CodeBlocks = {
    types: {
      code: ({ value }: { value: CodeProps }) => (
        <pre>
          <code>{value?.code}</code>
        </pre>
      ),
      image: ({ value }: { value: SanityImageProps }) => (
        <Image
          className='m-0 p-0'
          src={value?.image.url}
          alt={value?.alt}
          width={value?.image?.metadata?.dimensions?.width}
          height={value?.image?.metadata?.dimensions?.height}
        />
      ),
      table: ({ value }: { value: SanityTableProps }) => (
        <table>
          {value?.rows?.map((row, index) => (
            <tr key={index}>
              <th>{row?.cells[0]}</th>
              {row?.cells?.slice(1, row?.cells?.length)?.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
      ),
    },

    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/')
          ? 'noopener'
          : 'noreferrer noopener';
        return (
          <a
            className='text-blue-500 font-bold italic text-lg'
            href={value.href}
            rel={rel}
          >
            {children}
          </a>
        );
      },

      strong: ({ children, value }: any) => (
        <strong className='text-[#ff5277] text-lg'>{children}</strong>
      ),
    },

    block: {
      h1: ({ children, value }: any) => (
        <h1 className='text-[#ff5277] text-[2rem] mb-0'>{children}</h1>
      ),
      h2: ({ children, value }: any) => (
        <h2 className='text-[#ff5277] text-[1.8rem] mb-0'>{children}</h2>
      ),
      h3: ({ children, value }: any) => (
        <h3 className='text-[#ff5277] text-[1.6rem] mb-0'>{children}</h3>
      ),
      h4: ({ children, value }: any) => (
        <h4 className='text-[#ff5277] text-[1.4rem] mb-0'>{children}</h4>
      ),
      h5: ({ children, value }: any) => (
        <h5 className='text-[#ff5277] text-[1.2rem] mb-0'>{children}</h5>
      ),
      h6: ({ children, value }: any) => (
        <h6 className='text-[#ff5277] text-[1.rem] mb-0'>{children}</h6>
      ),
    },
  };

  console.log(props);
  return (
    <Layout
      description={props?.resume_data[1]?.description}
      title={props?.resume_data[1]?.title}
      image={''}
      type={'Resume'}
      alt={'my-resume'}
      keywords={'my resume, portfolio,seeking job'}
      publishedAt={props?.resume_data[1]?._createdAt}
      updatedAt={props?.resume_data[1]?._updatedAt}
      MIME={'png'}
      author_name={'Rocky Essel'}
    >
      <main className='max_screen:w-full max_screen:px-4 w-[40rem] mx-auto'>
        <article className='prose text-white'>
          <PortableText
            value={props?.resume_data[1]?.body}
            components={CodeBlocks}
          />
        </article>

        <div className='mt-10 flex items-center gap-10'>
          <Link href='/contact'>
            <button className='font-noe hover:scale-125 origin-center hover:origin-top transition-all duration-500 text-3xl after:hover:re_li w-fit font-bold relative text-decoration-none after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-2 after:bg-[#ff5277] hover:after:bg-rose-800'>
              Contact me
            </button>
          </Link>

          <button className='font-noe hover:scale-125 origin-center hover:origin-top transition-all duration-500 text-3xl after:hover:re_li w-fit font-bold relative text-decoration-none after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-2 after:bg-[#ff5277] hover:after:bg-rose-800'>
            Download Resume
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Resume;

export const getStaticProps: GetStaticProps<{
  resume_data: ResumeQueryProps[];
}> = async () => {
  const resume_data: ResumeQueryProps[] = await ResumeQuery();

  if (!resume_data) return { notFound: true };

  return {
    props: { resume_data: JSON.parse(JSON.stringify(resume_data)) },
  };
};
