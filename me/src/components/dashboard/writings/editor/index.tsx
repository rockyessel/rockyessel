'use client';

import WritingHeader from './header';
import WritingContent from './content';
import WritingFooterPage from './footer';
import { PostDraftKeyType, PostDraftType } from '@/types';
import { updatePostDraft } from '@/lib/actions/convex_/post-drafts';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import { deepEqual } from '../../../../../shared/helpers';

interface Props {
  draft: PostDraftType;
}

const WritingEditorEntry = ({ draft }: Props) => {
  const [saved, setSaved] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isPublishing, startPublishing] = useTransition();
  const [editablePostDraft, setEditablePostDraft] = useState(draft);

  const lastSavedPost = useRef(draft);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  console.log('editablePostDraft: ', editablePostDraft);

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

  const scheduleSave = useCallback(
    (updatedPost: PostDraftType) => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }

      saveTimeoutRef.current = setTimeout(() => {
        if (!deepEqual(updatedPost, lastSavedPost.current)) {
          handleAutoSave(updatedPost);
        }
      }, 5000);
    },
    [handleAutoSave]
  );

  const updateDraft = useCallback(
    <K extends PostDraftKeyType>(key: K, values: PostDraftType[K]) => {
      setEditablePostDraft((p) => {
        const updatedPost = { ...p, [key]: values };
        scheduleSave(updatedPost);
        return updatedPost;
      });
    },
    [scheduleSave]
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
