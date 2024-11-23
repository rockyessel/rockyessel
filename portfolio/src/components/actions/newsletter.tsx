'use client';

import { Mail } from 'lucide-react';
import { Input } from '../ui/input';
import { Button, buttonVariants } from '../ui/button';
import { SyntheticEvent, useState, useTransition } from 'react';
import { saveEmailToNewsletter } from '@/lib/actions/convex_/newsletters';
import Link from 'next/link';
import { cn } from '@/lib/utils/helpers';
import { toast } from 'sonner';

const Newsletter = () => {
  const [isSaving, startSaving] = useTransition();
  const [email, setEmail] = useState('');

  const onSaveEmail = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!email) {
      toast.error('Please enter your e-mail.');
      return;
    }

    const loadId = toast.loading('Adding you to our lists...');
    startSaving(async () => {
      try {
        const saved = await saveEmailToNewsletter(email);

        if (saved) {
          toast.dismiss(loadId);
          toast.success('Added successfully.');
          setEmail('')
        }
      } catch (error) {
        toast.dismiss(loadId);
        toast.error('Failed. Reach me here rockyessel76@gmail.com.');
      }
    });
  };

  return (
    <div className='space-y-2 w-full'>
      <p className='flex items-center mb-2'>
        <Mail strokeWidth={2.25} className='h-4 w-4 mr-2' />
        <span className='font-semibold'>Stay up to date</span>
      </p>
      <p className='text-sm mb-4'>Straight to your inbox.</p>
      <form onSubmit={onSaveEmail} className='relative'>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email address'
          required
        />
        <Button
          disabled={isSaving}
          type='submit'
          className='absolute right-[0.2rem] top-1/2 transform -translate-y-1/2 h-[2.1rem] bg-black text-white px-3 py-1 rounded-md hover:bg-black/50 transition-colors text-sm'
        >
          {isSaving ? 'Joining' : 'Join'}
        </Button>
      </form>

      <Link
        href='mailto:rockyessel76@gmail.com'
        className={cn(
          'w-full flex items-center bg-black text-white px-3 py-1 rounded-md hover:bg-black/50 transition-colors text-sm',
          buttonVariants({ variant: 'default' })
        )}
      >
        <Mail strokeWidth={2.25} className='h-4 w-4 mr-2' />
        Contact me personally
      </Link>
    </div>
  );
};

export default Newsletter;
