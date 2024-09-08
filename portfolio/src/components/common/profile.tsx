'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/helpers';
import { MapPin, Mail, Twitter, Linkedin, Github } from 'lucide-react';

interface Props {
  className?: string;
}

const Profile = ({ className }: Props) => {
  return (
    <div className={cn(className, 'sticky top-16')}>
      <div className='flex flex-col items-start'>
        <Avatar className='w-24 h-24'>
          <AvatarImage src='/97303710.jpg' />
          <AvatarFallback>RE</AvatarFallback>
        </Avatar>
        <h2 className='mt-4 text-xl font-semibold'>@rockyessel</h2>
        <p className='text-gray-500 text-sm'>Coding the convergence</p>
        <div className='mt-4 flex items-center text-gray-500 text-sm'>
          <MapPin className='h-4 w-4 mr-1' />
          Accra, Ghana
        </div>
        <div className='mt-4 flex flex-col space-y-2'>
          <Button
            variant='outline'
            className='w-full bg-transparent border-zinc-700/40'
          >
            <Mail className='mr-2 h-4 w-4' /> Email
          </Button>
          <Button
            variant='outline'
            className='w-full bg-transparent border-zinc-700/40'
          >
            <Twitter className='mr-2 h-4 w-4' /> Twitter
          </Button>
          <Button
            variant='outline'
            className='w-full bg-transparent border-zinc-700/40'
          >
            <Linkedin className='mr-2 h-4 w-4' /> LinkedIn
          </Button>
          <Button
            variant='outline'
            className='w-full bg-transparent border-zinc-700/40'
          >
            <Github className='mr-2 h-4 w-4' /> GitHub
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
