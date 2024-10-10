'use client';

import { PostDraftType } from '@/types';
import { useEffect, useState, useTransition } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  countWordsInStructure,
  descendant,
} from '@/components/editor/lib/helpers';
import { updatePostDraft } from '@/lib/actions/convex_/post-drafts';
import { toast } from 'sonner';
import { cn } from '@/lib/utils/helpers';

interface Props {
  draft: PostDraftType;
  saved: boolean;
  isSaving: boolean;
}

const WritingFooterPage = ({ draft, saved, isSaving }: Props) => {
  const [isHardSaving, startHardSaving] = useTransition();
  const [isHovered, setIsHovered] = useState(false);

  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  const handleHardSave = () => {
    startHardSaving(async () => {
      const draftId = await updatePostDraft(draft);
      if (draftId) {
        toast.success('Changes were saved successfully.');
      }
    });
  };

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

  const wordCount = countWordsInStructure(draft?.content);

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
        {isHovered ? (
          <Badge
            onMouseLeave={() => setIsHovered(false)}
            className='cursor-pointer'
            onClick={handleHardSave}
          >
            <span className={cn(isHardSaving && 'animate-pulse')}>
              {isHardSaving ? '•••' : 'Save changes'}
            </span>
          </Badge>
        ) : (
          <Badge
            onMouseEnter={() => setIsHovered(true)}
            variant={isSaving ? 'default' : saved ? 'secondary' : 'outline'}
          >
            {getSaveStatus()}
          </Badge>
        )}

        {isHardSaving && (
          <span className='text-sm animate-pulse text-gray-400'>Saving...</span>
        )}
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-sm'>
          <span className='text-lime-600'>{wordCount - 2}</span> Written
        </p>
        <Badge>Cover generated</Badge>
      </div>
    </div>
  );
};

export default WritingFooterPage;
