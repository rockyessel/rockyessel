import React from 'react';
import {
  Layout,
  ShareButton,
  Line,
  ViewsCommentCount,
  SkillsCard,
  NoteDetailCard,
  ReferenceCard,
} from '@/components';
import Image from 'next/image';
import { BiAddToQueue } from 'react-icons/bi';
import {
  GetStaticProps,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next';
import { CommonPath, NoteProps, Params } from '@/interface';
import { ProjectDetailsData, ProjectDetailsDataPath } from '@/utils/query';

const NoteDetails = ({
  note_data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const mimeType = note_data?.image.split('.').slice(-1)[0];
  return (
    <Layout
      description={note_data?.description}
      title={note_data?.title}
      image={note_data?.image}
      type={`Article`}
      alt={note_data?.alt?.current}
      keywords={note_data?.keywords}
      publishedAt={note_data?.publishedAt}
      updatedAt={note_data?._updatedAt}
      MIME={mimeType}
      author_name={note_data?.author.name}
    >
      <section className='px-6'>
        <Line />
        <ViewsCommentCount data={note_data} />
        <NoteDetailCard data={note_data} />
        <Line />
        <div>
          <div>
            <h2 className='text-2xl font-bold'>Categories</h2>
            <SkillsCard />
          </div>
          <Line />
          <div>
            <h2 className='text-2xl font-bold'>Reference</h2>
            <ReferenceCard data={note_data?.reference_post} />
          </div>
        </div>
        <Line />
        <section className='flex flex-col gap-4'>
          <section
            id={`comment`}
            className={`z-[5] sticky top-20 w-full border border-black bg-orange-400 rounded-md h-auto flex flex-col gap-10 justify-center px-10 py-5`}
          >
            <div className={`flex items-center justify-between`}>
              <div className='flex items-center divide-x divide-black'>
                <div className='pr-5 flex flex-col items-center'>
                  <span className='flex -space-x-4'>
                    {/* <Image
                      src={}
                      loading='lazy'
                      width={100}
                      height={100}
                      className='w-12 h-12 rounded-full border-2 border-slate-900'
                      alt=''
                    /> */}

                    <span className='w-12 h-12 bg-orange-300 inline-flex items-center justify-center rounded-full border-2 border-black '>
                      7+
                    </span>
                  </span>
                </div>

                <span className='pl-5 font-medium'>656 comment</span>
              </div>

              <div className='flex items-center justify-center divide-x'>
                <button
                  title='jhjhj'
                  type={'button'}
                  className=' inline-flex items-center p-2 font-medium  text-center bg-gradient-to-b from-orange-800 via-orange-700 to-orange-900 rounded-lg'
                >
                  <span title='Add new comment'>
                    <BiAddToQueue className={`text-[1.7rem]`} />
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section
            className={`px-10 py-5 w-full border border-black bg-orange-400 rounded-md h-auto`}
          >
            <div className={`flex flex-col gap-2.5 my-5`}>
              <div className='flex items-center space-x-4'>
                <Image
                  width={100}
                  height={100}
                  className='w-12 h-12 rounded-full border-2 border-black'
                  src=''
                  alt=''
                />
                <div className='font-medium dark:text-white'>
                  <div>Rocky Essel</div>
                  <div className='text-sm  '>Mon 21:23</div>
                </div>
              </div>

              <div
                className={`relative w-full h-full after:content-[''] after:absolute after:left-4 after:-top-[0%] after:-translate-y-[100%] after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-slate-900`}
              >
                <p
                  className={`w-[100%] bg-orange-300 border border-black h-auto p-4 rounded-md`}
                >
                  Hello World
                </p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  interface QueryProps {
    slug: {
      current: string;
    };
  }

  const note_path: CommonPath[] = await ProjectDetailsDataPath();

  const paths = note_path.map((path) => ({
    params: {
      note: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ note_data: NoteProps }> = async (
  context
) => {
  const { note }: any = context.params as Params;

  const note_data: NoteProps = await ProjectDetailsData(note);

  if (!note_data) return { notFound: true };

  return {
    props: { note_data: JSON.parse(JSON.stringify(note_data)) },
  };
};

export default NoteDetails;
// all-the-basic-things-in-know-in-the-rust-programming-language-as-a-rust-beginner
