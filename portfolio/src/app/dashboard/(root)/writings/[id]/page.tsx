import WritingEditorEntry from '@/components/dashboard/writings/editor';
import { getPostById } from '@/lib/actions/convex_/posts';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

const WritingPage = async ({ params }: Props) => {
  const post = await getPostById(params.id);

  if (!post) return notFound();

  return <WritingEditorEntry post={post} />;
};

export default WritingPage;
