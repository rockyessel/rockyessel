'use client';

import Link from 'next/link';
import { PostType } from '@/types';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils/helpers';
import { Button } from '@/components/ui/button';
import { SyntheticEvent, useState } from 'react';
import { GithubSVG, HackerNoon, LinkedIn, X } from '@/assets';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  MapPin,
  Mail,
  InstagramIcon,
  User,
  BookOpen,
  Clock,
  Hand,
  Youtube,
  Share,
} from 'lucide-react';

interface Props {
  className?: string;
  post: PostType;
}

const WritingShareAside = ({ className, post }: Props) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div className={cn(className, 'max-w-[16rem] w-full sticky top-16')}>
      <div className='flex flex-col items-start gap-5'>
        


        <div className='space-y-2'>
          <p className='flex items-center font-semibold'>
            <Share strokeWidth={2.25} className='h-4 w-4 mr-2' />
            Share
          </p>
          <div className='flex items-center gap-2'>
            <button className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'>
              <X className='h-4 w-4' />
            </button>
            <button className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'>
              <InstagramIcon
                strokeWidth='2'
                size={100}
                className='text-white h-4 w-4'
              />
            </button>
            <button className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'>
              <LinkedIn strokeWidth='1' className='h-4 w-4' />
            </button>
            <button className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'>
              <Youtube strokeWidth='1' className='text-white h-4 w-4' />
            </button>
            <button className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'>
              <GithubSVG strokeWidth='1' className='h-4 w-4' />
            </button>
          </div>
        </div>

        <div className='space-y-2 w-full'>
          <p className='flex items-center mb-2'>
            <Mail strokeWidth={2.25} className='h-4 w-4 mr-2' />
            <span className='font-semibold'>Stay up to date</span>
          </p>
          <p className='text-sm mb-4'>Straight to your inbox.</p>
          <form onSubmit={handleSubmit} className='relative'>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email address'
              required
            />
            <Button
              type='submit'
              className='absolute right-[0.2rem] top-1/2 transform -translate-y-1/2 h-[2.1rem] bg-black text-white px-3 py-1 rounded-md hover:bg-black/50 transition-colors text-sm'
            >
              Join
            </Button>
          </form>

          <Button
            type='submit'
            className='w-full flex items-center bg-black text-white px-3 py-1 rounded-md hover:bg-black/50 transition-colors text-sm'
          >
            <Mail strokeWidth={2.25} className='h-4 w-4 mr-2' />
            Contact me personally
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WritingShareAside;
