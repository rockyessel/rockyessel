'use client';

import isEqual from 'lodash/isEqual';
import WritingHeader from './header';
import WritingContent from './content';
import WritingFooterPage from './footer';
import { PostKeyType, PostType } from '@/types';
import { updateProduct } from '@/lib/actions/convex_/posts';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  post: PostType;
}

const WritingEditorEntry = ({ post }: Props) => {
  const [editablePost, setEditablePost] = useState(post);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  console.log('editablePost: ', editablePost);
  const lastSavedPost = useRef(post);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  console.log('editablePost: ', editablePost);

  const updatePost = useCallback(
    <K extends PostKeyType>(key: K, values: PostType[K]) => {
      setEditablePost((p) => {
        const updatedPost = { ...p, [key]: values };
        scheduleSave(updatedPost);
        return updatedPost;
      });
    },
    []
  );

  const scheduleSave = useCallback((updatedPost: PostType) => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      if (!isEqual(updatedPost, lastSavedPost.current)) {
        handleAutoSave(updatedPost);
      }
    }, 5000);
  }, []);

  const handleAutoSave = useCallback(
    async (postToSave: PostType) => {
      if (isSaving) return;

      setIsSaving(true);
      try {
        await updateProduct(postToSave);
        lastSavedPost.current = postToSave;
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      } catch (error) {
        console.error('Failed to save post:', error);
      } finally {
        setIsSaving(false);
      }
    },
    [isSaving]
  );

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <section className='relative w-full h-full mx-auto max-w-5xl'>
      <WritingHeader visible={visible} post={editablePost} />
      <WritingContent
        visible={visible}
        updatePost={updatePost}
        post={editablePost}
      />
      <WritingFooterPage
        isSaving={isSaving}
        saved={saved}
        post={editablePost}
      />
    </section>
  );
};

export default WritingEditorEntry;
