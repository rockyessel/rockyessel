'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import InfoHoverCard from '@/components/common/info-card';
import ValueSelector from '@/components/common/value-selector';
import { useGenOgImage } from '@/hooks/use-gen-og';

const WritingSettingsSEO = () => {
const {ogImage} = useGenOgImage()

  return (
    <div>
      <div className='space-y-4 py-4 my-4 border border-zinc-700/40'>
        <div className='space-y-4 px-4'>
          <h3 className='text-lg font-medium'>OG Image</h3>
          <p className='text-sm text-gray-500'>
            Overrides the default cover image, and appears when shared on social
            networks.
          </p>
          <label className='w-full inline-flex flex-col gap-1 border-2 border-dashed border-zinc-700/40 rounded-lg p-4 text-center'>
            <span>Click to upload cover image</span>
            <span className='text-sm text-gray-500'>
              Recommended dimension: 1200 x 630 px
            </span>
            <input type='file' className='m-0 p-0 w-0 h-0' />
          </label>
        </div>

        <div className='space-y-2 px-4'>
          <Label
            htmlFor='seo-title'
            className='inline-flex items-center justify-between'
          >
            <span className='inline-flex items-center gap-2'>
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
            An alternative title optimized for search engines. If left blank,
            the article title will be used.
          </p>
          <Input name='seoTitle' id='seo-title' placeholder='Enter SEO title' />
        </div>
        <div className='space-y-2 px-4'>
          <Label
            htmlFor='keywords'
            className='inline-flex items-center justify-between'
          >
            <span className='inline-flex items-center gap-2'>
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
            initialValues={[]}
            placeholder='Type keywords...'
          />
        </div>
        <div className='space-y-2 px-4'>
          <Label
            htmlFor='seo-description'
            className='w-full inline-flex items-center justify-between'
          >
            <span className='inline-flex items-center gap-2'>
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
            A description optimized for search engines. If left blank, the
            article description will be used.
          </p>
          <Textarea
            id='seo-description'
            name='seoDescription'
            placeholder='Enter SEO description'
          />
        </div>
      </div>
    </div>
  );
};

export default WritingSettingsSEO;
