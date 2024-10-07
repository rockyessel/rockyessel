'use client';

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Doc } from '../../../../../convex/_generated/dataModel';
import { PostType } from '@/types';

interface Props {
  post: PostType;
  saved: boolean;
  isSaving: boolean;
}

const WritingFooterPage = ({ post, saved, isSaving }: Props) => {
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
    return 'Unsaved changes';
  };

  const getConnectionStatus = () => {
    return isOnline ? 'Online' : 'Offline';
  };

  return (
    <div className='w-full border border-zinc-700/40 sticky bottom-1 rounded-md bg-neutral-900 p-2 flex justify-between items-center'>
      <Badge variant={isOnline ? 'default' : 'destructive'}>
        {getConnectionStatus()}
      </Badge>
      <Badge variant={isSaving ? 'default' : saved ? 'secondary' : 'outline'}>
        {getSaveStatus()}
      </Badge>
      <Badge>Cover Image generated</Badge>
    </div>
  );
};

export default WritingFooterPage;
