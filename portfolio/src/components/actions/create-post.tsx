'use client';

import React, { useTransition } from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { createPost } from '@/lib/actions/convex_/posts';
import { useRouter } from 'next/navigation';

const CreatePost = () => {
  const [isPending, startTransition] = useTransition();
  const { replace } = useRouter();

  const handleCreatePost = () => {
    startTransition(async () => {
      const postId = await createPost();
      if (postId) {
        replace(`/dashboard/writings/${postId}`);
      }
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleCreatePost}
      className='flex items-center'
    >
      {isPending ? (
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

export default CreatePost;
