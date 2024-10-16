'use client';

import { GithubSVG, HackerNoon, LinkedIn, X } from '@/assets';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn, profile } from '@/lib/utils/helpers';
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
} from 'lucide-react';
import { SyntheticEvent, useState } from 'react';
import { Input } from '../ui/input';
import Link from 'next/link';

interface Props {
  className?: string;
}

const Profile = ({ className }: Props) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className={cn(className, 'max-w-[16rem] w-full sticky top-16')}>
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
            BSc Electricals/Electronics Engineering || Blockchain Developer ||
            Robotics & Quantum Enthusiast
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

      {/* <div className='text-sm text-gray-400'>
        <p>© 2024 Made By Rocky Essel All Rights Reserved</p>
      </div> */}
    </div>
  );
};

export default Profile;
