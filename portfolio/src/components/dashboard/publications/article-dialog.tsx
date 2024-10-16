'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { ArticleType } from '@/types';
import { domainURL } from '@/lib/utils/helpers';
import axios from 'axios';
import { createPubArticle } from '@/lib/actions/convex_/publications';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Id } from '../../../../convex/_generated/dataModel';

interface Props {
  article?: ArticleType;
  pubUrl: string;
  pubId: Id<'publications'>;
}

export const ArticleDialog = ({ article, pubUrl, pubId }: Props) => {
  const [formUrl, setFormUrl] = useState<string>('');
  const [isScraping, startScraping] = useTransition();
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    startScraping(async () => {
      try {
        // Extract the host from pubUrl and formUrl using the URL constructor
        const pubUrlHost = new URL(pubUrl).host;
        const formUrlHost = new URL(formUrl).host;

        // Check if both URLs have the same host
        if (pubUrlHost !== formUrlHost) {
          toast.error(
            <p className='inline-flex flex-col gap-0.5'>
              <span className='font-bold'>Invalid URL</span>
              <span>
                The URL provided does not match the publication's domain.
              </span>
            </p>
          );
          return;
        }

        // If the host matches, continue with scraping
        const { data: urlData } = await axios.post(domainURL('/api/article'), {
          siteUrl: formUrl,
        });

        const article_ = await createPubArticle({ ...urlData, pubId });

        if (article_) {
          toast.success(
            <p className='inline-flex flex-col gap-0.5'>
              <span className='font-bold'>Publication Added</span>
              <span>The new publication has been successfully added.</span>
            </p>
          );
          router.refresh();
          return;
        }

        toast.error(
          <p className='inline-flex flex-col gap-0.5'>
            <span className='font-bold'>Failed to get info from link</span>
          </p>
        );
      } catch (error) {
        console.log('error: ', error);
        toast.error(
          <p className='inline-flex flex-col gap-0.5'>
            <span className='font-bold'>Something went wrong</span>
            <span>Failed to add the publication. Please try again.</span>
          </p>
        );
      }
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        {article ? 'Edit ArticleType ' : 'Add New ArticleType '}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>
            {article ? 'Edit ArticleType ' : 'Add New ArticleType '}
          </DialogTitle>
          <DialogDescription>
            {article
              ? 'Edit the details of your article here.'
              : 'Enter the details of your new article here.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <label htmlFor='url' className='text-right'>
                URL
              </label>
              <Input
                id='url'
                name='url'
                value={formUrl}
                onChange={(event) => setFormUrl(event.target.value)}
                className='col-span-3'
              />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>
              {article ? 'Save Changes' : 'Add ArticleType '}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
