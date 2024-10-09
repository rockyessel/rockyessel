'use client';

import React, { useTransition } from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { createPostDraft } from '@/lib/actions/convex_/post-drafts';
import { useRouter } from 'next/navigation';

const CreatePostDraft = () => {
  const [isDrafting, startDraftCreation] = useTransition();
  const { replace } = useRouter();

  const handleCreatePost = () => {
    startDraftCreation(async () => {
      const draftId = await createPostDraft();
      if (draftId) {
        replace(`/dashboard/writings/${draftId}`);
      }
    });
  };

  return (
    <Button
      disabled={isDrafting}
      onClick={handleCreatePost}
      className='flex items-center'
    >
      {isDrafting ? (
        <span>Loading...</span>
      ) : (
        <span className='inline-flex items-center'>
          <Plus className='w-4 h-4 mr-2' />
          Create Post
        </span>
      )}
    </Button>
  );
};

export default CreatePostDraft;
