import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Braces,
  Edit,
  Image as ImageIcon,
  Paperclip,
  Radio,
} from 'lucide-react';
import { GithubSVG, LiveSVG, NextJsSVG, TypeScriptSVG } from '@/assets';

const DashboardProjectCard = ({
  title,
  description,
  category,
  priority,
  assignees,
  comments,
  attachments,
}: any) => {
  const technologies = ['React', 'Solidity', 'IPFS', 'Ethereum', 'Node.js'];
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'dashboard':
        return 'bg-indigo-100 text-indigo-800';
      case 'mobile app':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='w-full flex flex-col gap-3 bg-zinc-800/50 rounded-md'>
      <Card className='w-full bg-zinc-800/80 border border-zinc-700/40 p-2 rounded-t-md rounded-b-none flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <NextJsSVG className='w-6 h-6' />
          <TypeScriptSVG className='w-6 h-6' />
        </div>

        <div>
          <Edit className='w-4 h-4' fill='#65a30d' size={20} />
        </div>
      </Card>

      <Card className='w-full p-2 bg-zinc-800/80 border border-zinc-700/40 shadow-sm rounded-b rounded-t-none hover:shadow-md transition-shadow duration-200'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 mb-2'>
            <Badge
              variant='outline'
              className={`${getCategoryColor(
                category
              )} text-xs font-medium px-2 py-1 rounded`}
            >
              {category}
            </Badge>
          </div>

          <Avatar className='w-8 h-8 border-2 border-zinc-700/40'>
            <AvatarImage src={'/symbion.png'} alt={'Symbion'} />
            <AvatarFallback>{'SM'}</AvatarFallback>
          </Avatar>
        </div>

        <h3 className='font-semibold text-md mb-1 text-white'>{title}</h3>
        <p className='text-gray-500 text-sm mb-3'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-3'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='text-xs text-lime-600 bg-black border border-lime-600 rounded-full py-1 px-1.5'
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='inline-flex items-center gap-1'>
              <GithubSVG strokeWidth={2.25} className='w-6 h-6' />
              <LiveSVG fill='#65a30d' strokeWidth={2.25} className='w-6 h-6' />
            </div>
          </div>
          <div className='flex items-center space-x-2 text-gray-400'>
            <span className='inline-flex items-center gap-1 text-xs'>
              <Paperclip strokeWidth={2.25} className='w-3 h-3.5' />
              {comments}
            </span>
            {/* <span className='flex items-center text-xs'>
              <ImageIcon strokeWidth={2.25} className='w-3 h-3.5' />
              {attachments}
            </span> */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardProjectCard;
