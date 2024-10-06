import WritingContent from '@/components/dashboard/writings/editor/content';
import WritingFooterPage from '@/components/dashboard/writings/editor/footer';
import WritingHeader from '@/components/dashboard/writings/editor/header';

interface Props {
  params: { id: string };
}

const WritingPage = async ({ params }: Props) => {
  console.log('params: ', params);

  return (
    <section className='w-full mx-auto max-w-5xl'>
      <WritingHeader article={{ sas: '' }} />
      <WritingContent article={{ sasas: '' }} />
      <WritingFooterPage article={{ sasas: '' }} />
    </section>
  );
};

export default WritingPage;
