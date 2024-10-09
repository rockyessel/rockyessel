'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InfoHoverCard from '@/components/common/info-card';
import ValueSelector from '@/components/common/value-selector';
import { useGenOgImage } from '@/hooks/use-gen-og';
import { PostDraftKeyType, PostDraftType } from '@/types';
import { ChangeEvent, useState, useTransition } from 'react';
import { updatePost } from '@/lib/actions/convex_/posts';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { PlusCircle, Trash2 } from 'lucide-react';
import { createSlug, domainURL } from '@/lib/utils/helpers';

interface Props {
  draft: PostDraftType;
}

const WritingSettingsSEO = ({ draft }: Props) => {
  const [editablePostDraft, setEditablePostDraft] = useState(draft);
  const [isSaving, startStarting] = useTransition();

  console.log('editablePostDraft: ', editablePostDraft);

  const handleSave = () => {
    startStarting(async () => {
      const draftId = await updatePost(editablePostDraft);
      if (postId) {
        toast.success('Draft changes saved.');
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

  // SEO

  const sitemapPath = domainURL('/sitemap.xml');

  const [seoData, setSeoData] = useState({
    ogImage: '',
    seoTitle: '',
    seoKeywords: '',
    seoDescription: '',
    metaRobots: '',
    useCanonicalUrl: false,
    canonicalUrls: [],
    schemaMarkup: '',
    twitterCard: '',
    alternateLanguageUrls: '',
    xmlSitemapUrl: '',
    favicon: '',
    authorInfo: '',
    publishDate: '',
    modifiedDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSeoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setSeoData((prev) => ({ ...prev, useCanonicalUrl: checked }));
  };

  const handleCanonicalUrlAdd = () => {
    setSeoData((prev) => ({
      ...prev,
      canonicalUrls: [...prev.canonicalUrls, ''],
    }));
  };

  const handleCanonicalUrlChange = (index: number, value: string) => {
    setSeoData((prev) => {
      const newUrls = [...prev.canonicalUrls];
      newUrls[index] = value;
      return { ...prev, canonicalUrls: newUrls };
    });
  };

  const handleCanonicalUrlRemove = (index: number) => {
    setSeoData((prev) => {
      const newUrls = [...prev.canonicalUrls];
      newUrls.splice(index, 1);
      return { ...prev, canonicalUrls: newUrls };
    });
  };

  const handleSaveChanges = () => {
    console.log('Saving SEO data:', seoData);
    // Implement your save logic here
  };

  return (
    <div className='w-full space-y-4 py-4 my-4'>
      <div className='sticky top-0 bg-neutral-900 w-full border-b p-2 text-gray-400 border-zinc-700/40 inline-flex items-center justify-between'>
        <p className='text-lg font-medium text-gray-300'>Edit SEO</p>

        <Button disabled={isSaving} onClick={handleSave}>
          {isSaving ? 'Saving changes...' : 'Save Changes'}
        </Button>
      </div>

      <div className='space-y-4 px-4'>
        <h3 className='text-lg font-medium'>OG Image</h3>
        <p className='text-sm text-gray-500'>
          Overrides the default cover image, and appears when shared on social
          networks.
        </p>
        <label className='w-full inline-flex flex-col gap-1 border-2 border-dashed border-zinc-700/40 rounded-lg p-4 text-center'>
          <span>Click to upload cover image</span>
          <span className='text-sm text-gray-500'>
            Recommended dimension: 1600 x 800 px
          </span>
          <input type='file' className='m-0 p-0 w-0 h-0' />
        </label>
      </div>

      <div className='space-y-2 px-4'>
        <Label
          htmlFor='seo-title'
          className='inline-flex items-center justify-between'
        >
          <span className='inline-flex items-center gap-2 justify-between'>
            SEO Title
            <InfoHoverCard>
              <span>
                {`This field is optional. With choosing, it uses the current date and time.`}
              </span>
            </InfoHoverCard>
          </span>

          <span className='text-gray-500'>(Optional)</span>
        </Label>
        <p className='text-sm text-gray-500'>
          An alternative title optimized for search engines. If left blank, the
          article title will be used.
        </p>
        <Input
          disabled={isSaving}
          name='seoTitle'
          value={editablePostDraft?.seoTitle}
          onChange={onChangePost}
          id='seo-title'
          placeholder='Enter SEO title'
        />
      </div>

      <div className='space-y-2 px-4'>
        <Label
          htmlFor='keywords'
          className='inline-flex items-center justify-between'
        >
          <span className='inline-flex items-center gap-2 justify-between'>
            SEO Keywords
            <InfoHoverCard>
              <span>
                {`This field is optional. With choosing, it uses the current date and time.`}
              </span>
            </InfoHoverCard>
          </span>
          <span className='text-gray-500'>(Optional)</span>
        </Label>
        <p className='text-sm text-gray-500'>
          Additional keywords to improve search engine optimization. These are
          not visible to readers.
        </p>
        <ValueSelector<string>
          limit={8}
          initialValues={editablePostDraft?.seoKeywords || []}
          onChange={(seoKeywords) => updatePost_('seoKeywords', seoKeywords)}
          placeholder='Enter keywords for SEO...'
        />
      </div>

      <div className='space-y-2 px-4'>
        <Label
          htmlFor='seo-description'
          className='w-full inline-flex items-center justify-between'
        >
          <span className='inline-flex items-center gap-2 justify-between'>
            SEO Description
            <InfoHoverCard>
              <span>
                {`This field is optional. With choosing, it uses the current date and time.`}
              </span>
            </InfoHoverCard>
          </span>

          <span className='text-gray-500'>(Optional)</span>
        </Label>
        <p className='text-sm text-gray-500'>
          A description optimized for search engines. If left blank, the article
          description will be used.
        </p>
        <Textarea
          value={editablePostDraft?.seoDescription}
          onChange={onChangePost}
          id='seo-description'
          name='seoDescription'
          placeholder='Enter SEO description'
        />
      </div>

      <div className='space-y-2 px-4'>
        <Label htmlFor='metaRobots'>Meta Robots</Label>
        <p className='text-sm text-gray-400 mt-1'>
          Controls how search engines crawl and index your page
        </p>
        <Select
          onValueChange={(value) =>
            handleInputChange({ target: { name: 'metaRobots', value } })
          }
        >
          <SelectTrigger className=''>
            <SelectValue placeholder='Select meta robots' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='index,follow'>Index, Follow</SelectItem>
            <SelectItem value='noindex,follow'>No Index, Follow</SelectItem>
            <SelectItem value='index,nofollow'>Index, No Follow</SelectItem>
            <SelectItem value='noindex,nofollow'>
              No Index, No Follow
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='space-y-2 px-4'>
        <Label htmlFor='xmlSitemapUrl'>XML Sitemap URL</Label>
        <Input
          disabled
          id='xmlSitemapUrl'
          name='xmlSitemapUrl'
          value={sitemapPath}
          onChange={handleInputChange}
          className='bg-neutral-800 border-gray-700'
          placeholder='Enter XML sitemap URL'
        />
        <p className='text-sm text-gray-400 mt-1'>
          Helps search engines discover and index your pages
        </p>
      </div>

      <div className='space-y-2 px-4'>
        <div className='flex items-center justify-between'>
          <Label htmlFor='useCanonicalUrl'>Use Canonical URL</Label>
          <p className='text-sm text-gray-400 mt-1'>
            Specifies the preferred version of a page for search engines
          </p>
          <Switch
            id='useCanonicalUrl'
            checked={seoData.useCanonicalUrl}
            onCheckedChange={handleSwitchChange}
          />
        </div>
        {seoData.useCanonicalUrl && (
          <div className='mt-4 space-y-4'>
            {seoData.canonicalUrls.map((url, index) => (
              <div key={index} className='flex items-center space-x-2'>
                <Input
                  value={url}
                  onChange={(e) =>
                    handleCanonicalUrlChange(index, e.target.value)
                  }
                  className='bg-neutral-800 border-gray-700 flex-grow'
                  placeholder='Enter canonical URL'
                />
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => handleCanonicalUrlRemove(index)}
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
            ))}
            <Button
              onClick={handleCanonicalUrlAdd}
              variant='outline'
              className='w-full'
            >
              <PlusCircle className='h-4 w-4 mr-2' />
              Add Canonical URL
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritingSettingsSEO;
