'use client';

import Link from 'next/link';
import { PostType } from '@/types';
import { cn } from '@/lib/utils/helpers';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeftFromLine } from 'lucide-react';
import { BookCheck, BookDashed, Settings } from 'lucide-react';

interface Props {
  post: PostType;
  visible: boolean;
}

const WritingHeader = ({ post, visible }: Props) => {
  const { back } = useRouter();

  return (
    <header
      className={cn(
        'w-full bg-neutral-900 flex items-center justify-between h-16 sticky top-0 z-20 transition-transform duration-300',
        visible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className='flex items-center gap-3'>
        <Button
          onClick={back}
          variant='outline'
          size='icon'
          className='rounded-full'
        >
          <ArrowLeftFromLine strokeWidth={2.25} className='h-4 w-4' />
        </Button>
        <button className='rounded-md border border-zinc-700/40 text-sm bg-zinc-800/60 p-1 inline-flex items-center gap-2'>
          <BookCheck strokeWidth={2.25} className='w-4 h-4' size={20} />
          Home
        </button>
      </div>

      <div className='flex items-center'>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-3'>
            <button className='rounded-md border border-zinc-700/40 text-sm p-1 inline-flex items-center gap-2'>
              <BookDashed strokeWidth={2.25} className='w-4 h-4' size={20} />
              Preview
            </button>

            <button className='rounded-md border border-zinc-700/40 text-sm bg-zinc-800/60 p-1 inline-flex items-center gap-2'>
              <BookCheck strokeWidth={2.25} className='w-4 h-4' size={20} />
              Publish
            </button>

            <Link
              href={`/dashboard/writings/${post._id}`}
              className='rounded-md border border-zinc-700/40 text-sm p-1 inline-flex items-center gap-2'
            >
              <Settings strokeWidth={2.25} className='w-4 h-4' size={20} />
              Settings
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WritingHeader;
