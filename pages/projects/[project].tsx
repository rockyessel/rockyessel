import React from 'react';
import { Layout, ProjectDetailsCard } from '@/components';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { BiAddToQueue } from 'react-icons/bi';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next';
import { CommonPath, HomeProps, Params } from '@/interface';
import { CommonPathProps, ProjectDataProps } from '@/utils/query';
import { useRouter } from 'next/router';

const ProjectDetails = ({
  project_data,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const mimeType = project_data?.image[0].split('.').slice(-1)[0];

  const router = useRouter();

  if (router.isFallback) return <p>404</p>;

  return (
    <Layout
      description={project_data?.description}
      title={project_data?.title}
      image={project_data?.image[0]}
      type={'Portfolio'}
      alt={project_data?.slug.current}
      keywords={project_data?.tags}
      publishedAt={project_data?._createdAt}
      updatedAt={project_data?._updatedAt}
      MIME={mimeType}
      author_name={'Rocky Essel'}
    >
      <main className='max_screen:w-full max_screen:px-4 px-4 xl:w-[70rem] mx-auto'>
        <section>
          <ProjectDetailsCard data={project_data} />
        </section>
      </main>
    </Layout>
  );
};

export default ProjectDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const project_path: CommonPath[] = await CommonPathProps('portfolio');

  const paths = project_path.map((path) => ({
    params: {
      project: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  project_data: HomeProps;
}> = async (context) => {
  const { project }: any = context.params as Params;

  const project_data: HomeProps = await ProjectDataProps(project);

  if (!project_data) return { notFound: true };

  return {
    props: { project_data: JSON.parse(JSON.stringify(project_data)) },
  };
};
