'use client';

import {
  GithubSVG,
  HackerNoon,
  LinkedIn,
  RobotsTextSVG,
  RssSVG,
  SEOSVG,
  SitemapSVG,
  X,
} from '@/assets';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/helpers';
import {
  MapPin,
  Mail,
  Twitter,
  Linkedin,
  Github,
  InstagramIcon,
  User,
  BookOpen,
  Hash,
  Clock,
  Calendar,
  Hand,
  Youtube,
  Tags,
  TrendingUp,
  SquareLibrary,
  BookCheck,
  Box,
} from 'lucide-react';
import { SyntheticEvent, useState } from 'react';
import { Input } from '../ui/input';
import Link from 'next/link';

interface Props {
  className?: string;
}

const WritingAside = ({ className }: Props) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className={cn(className, 'max-w-[16rem] w-full sticky top-16')}>
      <div className='flex flex-col items-start gap-5'>
        <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900'>
          <p className='flex items-center font-semibold'>
            <BookCheck className='h-4 w-4 mr-2' />
            Publication Platforms
          </p>
          <div className='flex flex-wrap items-center gap-2'>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              hackernoon <span>25</span>
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              freecodecamp <span>35</span>
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              hashnode <span>5</span>
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              medium <span>15</span>
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              symbion <span>52</span>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900'>
          <p className='flex items-center font-semibold'>
            <SquareLibrary className='h-4 w-4 mr-2' />
            Series
          </p>
          <div className='flex flex-wrap items-center gap-2'>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              web2
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              web3
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              robotics
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              quantum computing
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              others
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900'>
          <p className='flex items-center font-semibold'>
            <TrendingUp className='h-4 w-4 mr-2' />
            Stats
          </p>
          <div className='flex flex-wrap items-center gap-2'>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              Total Word counts
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              Total Views counts
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              Newsletters Subscription
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900'>
          <p className='flex items-center font-semibold'>
            <Tags className='h-4 w-4 mr-2' />
            Tags
          </p>
          <div className='flex flex-wrap items-center gap-2'>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              software
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              Total Views counts
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              Newsletters Subscription
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900'>
          <p className='flex items-center font-semibold'>
            <Box className='h-4 w-4 mr-2' />
            Categories
          </p>

          <div className='flex flex-wrap items-center gap-2'>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              software
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              Total Views counts
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              Newsletters Subscription
            </p>
          </div>
        </div>

        <div className='space-y-2 mt-5'>
          <p className='flex items-center font-semibold'>
            <SEOSVG className='h-4 w-4 mr-2' />
            Explore more feeds
          </p>
          <div className='flex items-center gap-2'>
            <button className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'>
              <RssSVG className='h-4 w-4' />
            </button>
            <button className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'>
              <SitemapSVG className='h-4 w-4' />
            </button>
            <button className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'>
              <RobotsTextSVG className='h-4 w-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingAside;
