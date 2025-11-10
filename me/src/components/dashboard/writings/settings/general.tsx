'use client';

import { ChangeEvent, useState, useTransition } from 'react';
import { CategoryKeysType, PostDraftKeyType, PostDraftType } from '@/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InfoHoverCard from '@/components/common/info-card';
import ValueSelector from '@/components/common/value-selector';
import DateTimePicker from '@/components/common/datetime-picker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createSlug } from '@/lib/utils/helpers';
import { Button } from '@/components/ui/button';
import { CATEGORIES } from '@/lib/utils/constants';
import { toast } from 'sonner';
import { updatePostDraft } from '@/lib/actions/convex_/post-drafts';

interface Props {
  draft: PostDraftType;
}

export type DateTimeModeType = 'backdate' | 'schedule' | 'none';

const WritingSettingsGeneral = ({ draft }: Props) => {
  const [editablePostDraft, setEditablePostDraft] = useState(draft);
  const [dateMode, setDateMode] = useState<DateTimeModeType>('none');
  const [isSaving, startStarting] = useTransition();

  console.log('editablePostDraft: ', editablePostDraft);

  const handleSave = () => {
    startStarting(async () => {
      const postId = await updatePostDraft(editablePostDraft);
      if (postId) {
        toast.success('Post changes saved.');
      }
    });
  };

  const onChangePost = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    setEditablePostDraft((p) => ({
      ...p,
      [target.name]: target.value,
    }));
  };

  const updatePost_ = <K extends PostDraftKeyType>(
    key: K,
    values: PostDraftType[K]
  ) => {
    setEditablePostDraft((p) => {
      const updatedPost = { ...p, [key]: values };
      return updatedPost;
    });
  };

  const contentType = [
    'Web 2.0',
    'Web 3.0',
    'Robotics',
    'Quantum Computing',
    'Others',
  ];

  return (
    <div className=''>
      <div className='sticky top-0 bg-neutral-900 w-full border-b p-2 text-gray-400 border-zinc-700/40 inline-flex items-center justify-between'>
        <p className='text-lg font-medium text-gray-300'>Edit General</p>

        <Button disabled={isSaving} onClick={handleSave}>
          {isSaving ? 'Saving changes...' : 'Save Changes'}
        </Button>
      </div>
      <div className='space-y-4 px-4'>
        <div className='space-y-2'>
          <Label htmlFor='slug'>Slug</Label>
          <p className='text-sm text-gray-500'>
            {`The URL-friendly version of the post title. This is used
                    in the post's URL.`}
          </p>
          <Input
            disabled={isSaving}
            name='slug'
            value={createSlug(
              editablePostDraft?.slug || editablePostDraft?.title
            )}
            onChange={onChangePost}
            id='slug'
            placeholder='post-slug'
          />
        </div>
        <div className='space-y-2'>
          <div className='grid gap-2'>
            <Label className='text-gray-300' htmlFor='category'>
              Category
            </Label>
            <p className='text-sm text-muted-foreground'>
              {`Select the main category that best describes your blog's
                      content.`}
            </p>
            <Select
              disabled={isSaving}
              value={editablePostDraft?.category}
              onValueChange={(category) => updatePost_('category', category)}
              required
            >
              <SelectTrigger className='px-2 text-lime-600 border-zinc-700/40'>
                <SelectValue placeholder={'Select a category'} />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(CATEGORIES)?.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label className='text-gray-300' htmlFor='subcategory'>
              Subcategory
            </Label>
            <p className='text-sm text-muted-foreground'>
              {`Choose a more specific subcategory to further define your
                      blog's focus.`}
            </p>
            <Select
              value={editablePostDraft?.subCategory}
              onValueChange={(subCategory) =>
                updatePost_('subCategory', subCategory)
              }
              disabled={isSaving || !editablePostDraft?.category}
              required
            >
              <SelectTrigger className='px-2 text-lime-600 border-zinc-700/40'>
                <SelectValue placeholder='Select a subcategory' />
              </SelectTrigger>
              <SelectContent>
                {editablePostDraft?.category &&
                  CATEGORIES[
                    editablePostDraft?.category as CategoryKeysType
                  ]?.map((subcategory) => (
                    <SelectItem key={subcategory} value={subcategory}>
                      {subcategory}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='tags'>Tags</Label>
          <p className='text-sm text-gray-500'>
            Add relevant tags to categorize your post and make it more
            discoverable.
          </p>
          <ValueSelector<string>
            limit={8}
            disabled={isSaving}
            initialValues={editablePostDraft.tags || []}
            onChange={(tags) => updatePost_('tags', tags)}
            placeholder='Type tags...'
          />
        </div>
      </div>

      <div className='space-y-4 px-4'>
        <div className='grid gap-2'>
          <Label className='text-gray-300' htmlFor='postType'>
            Content Type
          </Label>
          <p className='text-sm text-muted-foreground'>
            {`Choose a specific content type for your post.`}
          </p>
          <Select
            value={editablePostDraft?.postType}
            onValueChange={(type) => updatePost_('postType', type)}
            disabled={isSaving || !editablePostDraft?.category}
            required
          >
            <SelectTrigger className='px-2 text-lime-600 border-zinc-700/40'>
              <SelectValue placeholder='Select a content type' />
            </SelectTrigger>
            <SelectContent>
              {contentType.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='space-y-4 px-4'>
        <div className='space-y-2'>
          <Label htmlFor='description'>Description</Label>
          <p className='text-sm text-gray-500'>
            A brief summary of your post. This may appear in search results or
            social media shares.
          </p>
          <Textarea
            disabled={isSaving}
            id='description'
            value={editablePostDraft?.description || ''}
            onChange={onChangePost}
            name='description'
            placeholder='post description'
            className='min-h-[100px]'
          />
        </div>
      </div>

      {/* Dates */}
      {!editablePostDraft?.publishedAt && (
        <div className='space-y-4 border-y border-zinc-700/40 py-4 my-4'>
          {dateMode !== 'backdate' && (
            <div className='space-y-2 flex flex-col px-4'>
              <Label className='inline-flex items-center justify-between'>
                <span className='inline-flex items-center gap-2'>
                  Schedule your post{' '}
                  <InfoHoverCard>
                    <span>
                      {`You'll still have to pay gas fee. For now everything is
                            handled in the client-side`}
                    </span>
                  </InfoHoverCard>
                </span>
                <span className='text-gray-500'>(Optional)</span>
              </Label>
              <p className='text-sm text-gray-500'>
                Set a future date and time for your post to be automatically
                published.
              </p>
              <DateTimePicker
                disabled={isSaving}
                disablePastDates={true}
                onDateTimeChange={(date) => {
                  setDateMode('schedule');
                  updatePost_('publishedAt', date?.toISOString());
                }}
              />
            </div>
          )}

          {dateMode !== 'schedule' && (
            <div className='space-y-2 flex flex-col px-4'>
              <Label className='inline-flex items-center justify-between'>
                <span className='inline-flex items-center gap-2'>
                  Publish on a backdate
                  <InfoHoverCard>
                    <span>
                      {`This field is optional. With choosing, it uses the current date and time.`}
                    </span>
                  </InfoHoverCard>
                </span>
                <span className='text-gray-500'>(Optional)</span>
              </Label>
              <p className='text-sm text-gray-500'>
                Set a past date for your post. This can be useful for
                maintaining chronological order in your blog.
              </p>
              <DateTimePicker
                disabled={isSaving}
                initialFocus={false}
                disableFutureDates={true}
                onDateTimeChange={(date) => {
                  setDateMode('backdate');
                  updatePost_('publishedAt', date?.toISOString());
                }}
              />
            </div>
          )}
        </div>
      )}

      {editablePostDraft?.publishedAt && (
        <div className='space-y-4 px-4 py-4 my-4'>
          <div className='space-y-2 flex flex-col'>
            <Label className='inline-flex items-center justify-between'>
              <span className='inline-flex items-center gap-2'>
                Published Date{' '}
                <InfoHoverCard>
                  <span>
                    {`You'll still have to pay gas fee. For now everything is
                            handled in the client-side`}
                  </span>
                </InfoHoverCard>
              </span>
              {/* <span className='text-gray-500'>(Optional)</span> */}
            </Label>
            <p className='text-sm text-gray-500'>
              Once set you cannot edit it again
            </p>
            <DateTimePicker
              disabled={true}
              initialDate={new Date(editablePostDraft?.publishedAt)}
            />
          </div>
        </div>
      )}

      <div className='space-y-4 px-4'>
        <Button disabled={isSaving}>Publish</Button>
      </div>
    </div>
  );
};

export default WritingSettingsGeneral;
