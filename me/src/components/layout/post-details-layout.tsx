'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils/helpers';
import PostTOCAside from '../common/post-toc-aside';
import WritingShareAside from '../common/writing-share-aside';
import { PostType } from '@/types';

interface Props {
  children: ReactNode;
  className?: string;
  post: PostType;
}

const PostDetailsLayout = ({ children, className, post }: Props) => {
  return (
    <section className={cn(className, 'w-full h-full flex items-start gap-4')}>
      <WritingShareAside post={post} />
      {children}
      <PostTOCAside content={post?.content} />
    </section>
  );
};

export default PostDetailsLayout;
