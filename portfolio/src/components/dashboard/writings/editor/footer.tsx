'use client';

import { PostDraftType } from '@/types';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  countWordsInStructure,
  descendant,
} from '@/components/editor/lib/helpers';

interface Props {
  draft: PostDraftType;
  saved: boolean;
  isSaving: boolean;
}

const WritingFooterPage = ({ draft, saved, isSaving }: Props) => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  console.log({ saved, isSaving });

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const getSaveStatus = () => {
    if (isSaving) return 'Saving...';
    if (saved) return 'Saved';
    return 'Waiting for changes';
  };

  const wordCount = countWordsInStructure(descendant(draft?.content));

  const getConnectionStatus = () => {
    return isOnline ? 'Online' : 'Offline';
  };

  return (
    <div className='w-full border border-zinc-700/40 sticky bottom-1 rounded-md bg-neutral-900 p-2 flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <Badge
          className='inline-flex items-center'
          variant={isOnline ? 'default' : 'destructive'}
        >
          <span className='mr-0.5'>{getConnectionStatus()}</span>
          <span className='animate-pulse'>•</span>
        </Badge>
        <span className='text-gray-500'>{' • '}</span>
        <Badge variant={isSaving ? 'default' : saved ? 'secondary' : 'outline'}>
          {getSaveStatus()}
        </Badge>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-sm'>
          <span className='text-lime-600'>{wordCount}</span> Written
        </p>
        <Badge>Cover Image generated</Badge>
      </div>
    </div>
  );
};

export default WritingFooterPage;
