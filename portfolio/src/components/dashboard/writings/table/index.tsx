'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Edit, Trash2, Eye, ThumbsUp } from 'lucide-react';
import { Doc } from '../../../../../convex/_generated/dataModel';

interface Props {
  posts: Doc<'posts'>[];
}

const WritingTable = ({ posts }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(
    (post) =>
      post?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post?.tags?.some((tag: string) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className='container mx-auto p-4'>
      <div className='relative mb-6'>
        <Input
          type='text'
          placeholder='Search posts...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='pl-10'
        />
        <Search className='w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts?.map((post, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>{post?.title}</TableCell>
              <TableCell>
                <div className='flex flex-wrap gap-1'>
                  {post?.tags?.map((tag, index) => (
                    <Badge key={index} variant='secondary'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <Eye className='w-4 h-4 mr-1' />
                  {1200}
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center'>
                  <ThumbsUp className='w-4 h-4 mr-1' />
                  {2302}
                </div>
              </TableCell>
              <TableCell>{post?.createdAt}</TableCell>
              <TableCell>
                <div className='flex space-x-2'>
                  <Button variant='outline' size='sm'>
                    <Edit className='w-4 h-4' />
                  </Button>
                  <Button variant='destructive' size='sm'>
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WritingTable;
