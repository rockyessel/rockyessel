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
import { PostDraftType } from '@/types';

interface Props {
  drafts: PostDraftType[];
}

const WritingTable = ({ drafts }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = drafts.filter(
    (draft) =>
      draft?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      draft?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      draft?.tags?.some((tag: string) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className='container mx-auto p-4'>
      <div className='relative mb-6'>
        <Input
          type='text'
          placeholder='Search drafts...'
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
          {filteredPosts?.map((draft, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>{draft?.title}</TableCell>
              <TableCell>
                <div className='flex flex-wrap gap-1'>
                  {draft?.tags?.map((tag, index) => (
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
              <TableCell>{draft?.createdAt}</TableCell>
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
