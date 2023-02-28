import React from 'react';
import {
  GetStaticProps,
  GetStaticPaths,
  InferGetServerSidePropsType,
} from 'next';
import { CommonPath, NoteProps, Params } from '@/interface';
import {
  CommonPathProps,
  NoteDetailsData,
  UpdateDatedViewCount,
} from '@/utils/query';
import { useRouter } from 'next/router';
import { AddViewCount } from '@/utils/api-request';
import {
  CommentDisplay,
  CommentForm,
  CommentStatus,
  Layout,
  NoteDetailCard,
  ReferenceCard,
  SkillsCard,
  ViewsCommentCount,
} from '@/components';

const NoteDetails = ({
  thought_data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [hide, setHide] = React.useState<boolean>(false);
  const [hasIncremented, setHasIncremented] = React.useState<boolean>(false);
  const [thoughtData, setThoughtData] = React.useState(thought_data);

  const router = useRouter();

  const note = router.asPath?.split('/')?.slice(-1)[0]?.split('#')[0];

  React.useEffect(() => {
    if (!hasIncremented) {
      setTimeout(() => {
        if (thought_data) {
          AddViewCount(thought_data?._id)
            .then(() => {
              setHasIncremented(true);
              UpdateDatedViewCount(note).then((data) => setThoughtData(data));
            })
            .catch((error) => console.error(error));
        }
      }, 5000);
    }
  }, [thought_data?._id, hasIncremented, note, thought_data]);

  const mimeType = thought_data?.image?.split('.')?.slice(-1)[0];

  if (router.isFallback) return <p>404</p>;

  return (
    <Layout
      description={thought_data?.description}
      title={thought_data?.title}
      image={thought_data?.image}
      type={`Article`}
      alt={thought_data?.alt?.current}
      keywords={`${thought_data?.keywords}`}
      publishedAt={thought_data?.publishedAt}
      updatedAt={thought_data?._updatedAt}
      MIME={mimeType}
      author_name={thought_data?.author?.name}
    >
      <main
        className='max_screen:w-full max_screen:px-4 px-4 xl:w-[70rem] mx-auto mt-5 md:mt-28'
        id='note'
      >
        <section>
          <ViewsCommentCount data={thoughtData} />
          <NoteDetailCard data={thought_data} />

          <div className='my-16 flex flex-col gap-10'>
            <div>
              <p className='text-2xl font-bold'>Categories</p>
              <SkillsCard />
            </div>
            <div>
              <p className='text-2xl font-bold'>Resource</p>
              <ReferenceCard data={thought_data?.reference_post} />
            </div>
          </div>

          <section className='flex flex-col gap-4'>
            <CommentStatus setHide={setHide} data={thought_data?.comment} />
            {hide && (
              <div className='transition-transform duration-500'>
                <CommentForm data={thought_data} />
              </div>
            )}
            <CommentDisplay data={thought_data?.comment} />
          </section>
        </section>
      </main>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const thought_path: CommonPath[] = await CommonPathProps('thought');

  const paths = thought_path.map((path) => ({
    params: {
      thought: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  thought_data: NoteProps;
}> = async (context) => {
  const { thought }: any = context.params as Params;

  const thought_data: NoteProps = await NoteDetailsData(thought);

  if (!thought_data) return { notFound: true };

  return {
    props: { thought_data: JSON.parse(JSON.stringify(thought_data)) },
  };
};

export default NoteDetails;
