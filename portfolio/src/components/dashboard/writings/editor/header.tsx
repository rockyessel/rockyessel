'use client';

import Link from 'next/link';
import { TransitionStartFunction, useTransition } from 'react';
import { PostDraftType } from '@/types';
import { cn, domainURL } from '@/lib/utils/helpers';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeftFromLine } from 'lucide-react';
import { BookCheck, BookDashed, Settings } from 'lucide-react';
import { publishDraft } from '@/lib/actions/convex_/post-drafts';
import { toast } from 'sonner';
import { getPostById } from '@/lib/actions/convex_/posts';

interface Props {
  draft: PostDraftType;
  visible: boolean;
  startPublishing: TransitionStartFunction;
  isPublishing: boolean;
}

const WritingHeader = ({
  draft,
  visible,
  isPublishing,
  startPublishing,
}: Props) => {
  const { back, push } = useRouter();

  const handlePublishDraft = () => {
    startPublishing(async () => {
      const publishedPostId = await publishDraft(draft?._id);
      if (publishedPostId) {
        const post = await getPostById(publishedPostId);
        if (!post) {
          toast.error('Failed to get post. Please publish again.');
          return;
        }
        toast.success(
          <p>
            Post is published successfully.{' Visit: '}
            <a href={domainURL(`/${post?.slug}`)}>{post?.title}</a>
          </p>
        );
      }
    });
  };
  return (
    <header
      className={cn(
        'w-full bg-neutral-900 flex items-center justify-between h-16 sticky top-0 z-20 transition-transform duration-300',
        visible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className='flex items-center gap-3'>
        <Button
          disabled={isPublishing}
          onClick={back}
          variant='outline'
          size='icon'
          className='rounded-full'
        >
          <ArrowLeftFromLine strokeWidth={2.25} className='h-4 w-4' />
        </Button>
      </div>

      <div className='flex items-center'>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-3'>
            <button
              disabled={isPublishing}
              className='rounded-md border border-zinc-700/40 text-sm p-1 inline-flex items-center gap-2'
            >
              <BookDashed strokeWidth={2.25} className='w-4 h-4' size={20} />
              Preview
            </button>

            <button
              disabled={isPublishing}
              onClick={handlePublishDraft}
              className='rounded-md border border-zinc-700/40 text-sm bg-zinc-800/60 p-1 inline-flex items-center gap-2'
            >
              <BookCheck strokeWidth={2.25} className='w-4 h-4' size={20} />
              Publish
            </button>

            <button
              disabled={isPublishing}
              onClick={() => push(`/dashboard/writings/${draft._id}/settings`)}
              className='rounded-md border border-zinc-700/40 text-sm p-1 inline-flex items-center gap-2'
            >
              <Settings strokeWidth={2.25} className='w-4 h-4' size={20} />
              Settings
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WritingHeader;
