'use client';

import { GithubSVG, HackerNoon, LinkedIn, X } from '@/assets';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn, profile } from '@/lib/utils/helpers';
import {
  MapPin,
  InstagramIcon,
  User,
  BookOpen,
  Clock,
  Hand,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';
import Newsletter from '../actions/newsletter';

interface Props {
  className?: string;
}

const Profile = ({ className }: Props) => {
  return (
    <div className={cn(className, 'lg:max-w-[16rem] w-full sticky top-16')}>
      <div className='flex flex-col items-start gap-5'>
        <div className='space-y-2'>
          <div className='w-full flex items-center justify-center'>
            <Avatar className='w-24 h-24'>
              <AvatarImage src={profile} />
              <AvatarFallback>RE</AvatarFallback>
            </Avatar>
          </div>
          <h2 className='mt-4 text-xl font-semibold'>Rocky Essel</h2>
          <h2 className='mt-4 text-xl font-semibold'>@rockyessel</h2>
          <p className='text-gray-400'>
            BSc Electrical/Electronics Engineering || Software Developer ||
            Quantum Computing Enthusiast
          </p>
        </div>

        <div className='space-y-2'>
          <p className='flex items-center text-gray-500 text-sm'>
            <MapPin strokeWidth={2.25} className='h-4 w-4 mr-2' />
            Accra, Ghana
          </p>
          <p className='text-sm text-gray-300 flex items-center'>
            <User strokeWidth={2.25} className='w-4 h-4 mr-2' />
            Never give up.
          </p>
          <p className='text-sm text-gray-300 flex items-center'>
            <BookOpen strokeWidth={2.25} className='w-4 h-4 mr-2' />4 writing
            platforms
          </p>
          <p className='text-sm text-gray-300 flex items-center'>
            <Link
              target='_blank'
              href='https://hackernoon.com/u/rockyessel?ref='
              className='inline-flex items-center gap-1 w-full h-full'
            >
              <Clock strokeWidth={2.25} className='w-4 h-4 mr-1' />
              2,323 hours read-time on <HackerNoon className='ml-1 w-4 h-4' />
            </Link>
          </p>
        </div>

        <div className='space-y-2'>
          <p className='flex items-center font-semibold'>
            <Hand strokeWidth={2.25} className='h-4 w-4 mr-2' />
            Say Hello
          </p>
          <div className='flex items-center gap-2'>
            <a
              target='_blank'
              href='https://x.com/rockyessel/?rel=rockyessel.me'
              className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'
            >
              <X className='h-4 w-4' />
            </a>
            <a
              target='_blank'
              href='https://instagram.com/rockyessel/?rel=rockyessel.me'
              className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'
            >
              <InstagramIcon
                strokeWidth='2'
                size={100}
                className='text-white h-4 w-4'
              />
            </a>

            <a
              target='_blank'
              href='https://linkedin.com/in/rockyessel/?rel=rockyessel.me'
              className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'
            >
              <LinkedIn strokeWidth='1' className='h-4 w-4' />
            </a>

            <a
              target='_blank'
              href='https://youtube.com/@rockyessel/?rel=rockyessel.me'
              className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'
            >
              <Youtube strokeWidth='1' className='text-white h-4 w-4' />
            </a>

            <a
              target='_blank'
              href='https://github.com/rockyessel/?rel=rockyessel.me'
              className='bg-transparent outline-none border border-zinc-700/40 p-2 rounded-md'
            >
              <GithubSVG strokeWidth='1' className='h-4 w-4' />
            </a>
          </div>
        </div>

        <Newsletter />
      </div>

      <div className='text-sm text-gray-500 mt-5 text-center'>
        <p>© 2024 Made By Rocky Essel. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Profile;
