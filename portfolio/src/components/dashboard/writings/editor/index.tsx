'use client';

import isEqual from 'lodash/isEqual';
import WritingHeader from './header';
import WritingContent from './content';
import WritingFooterPage from './footer';
import { PostDraftKeyType, PostDraftType } from '@/types';
import {
  publishDraft,
  updatePostDraft,
} from '@/lib/actions/convex_/post-drafts';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import { getPostById } from '@/lib/actions/convex_/posts';
import { toast } from 'sonner';
import { domainURL } from '@/lib/utils/helpers';

interface Props {
  draft: PostDraftType;
}

const WritingEditorEntry = ({ draft }: Props) => {
  const [editablePostDraft, setEditablePostDraft] = useState(draft);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isPublishing, startPublishing] = useTransition();

  console.log('editablePostDraft: ', editablePostDraft);
  const lastSavedPost = useRef(draft);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  console.log('editablePostDraft: ', editablePostDraft);

  const updateDraft = useCallback(
    <K extends PostDraftKeyType>(key: K, values: PostDraftType[K]) => {
      setEditablePostDraft((p) => {
        const updatedPost = { ...p, [key]: values };
        scheduleSave(updatedPost);
        return updatedPost;
      });
    },
    []
  );

  const scheduleSave = useCallback((updatedPost: PostDraftType) => {
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
    async (postToSave: PostDraftType) => {
      if (isSaving) return;

      setIsSaving(true);
      try {
        await updatePostDraft(postToSave);
        lastSavedPost.current = postToSave;
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      } catch (error) {
        console.error('Failed to save draft:', error);
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
      <WritingHeader
        visible={visible}
        draft={editablePostDraft}
        isPublishing={isPublishing}
        startPublishing={startPublishing}
      />
      <WritingContent
        visible={visible}
        updateDraft={updateDraft}
        draft={editablePostDraft}
      />
      <WritingFooterPage
        isSaving={isSaving}
        saved={saved}
        draft={editablePostDraft}
      />
    </section>
  );
};

export default WritingEditorEntry;
