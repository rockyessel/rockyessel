import WritingEditorEntry from '@/components/dashboard/writings/editor';
import { getPostDraftById } from '@/lib/actions/convex_/post-drafts';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

const WritingPage = async (props: Props) => {
  const params = await props.params;
  const draft = await getPostDraftById(params.id);

  if (!draft) return notFound();

  return <WritingEditorEntry draft={draft} />;
};

export default WritingPage;
