'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PublicationType } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Edit, Trash2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AddEditPublicationDialog from './publication-dialog';

interface Props {
  publication: PublicationType;
  onEdit: (publication: PublicationType) => void;
  onDelete: (id: string) => void;
}

const PublicationCard = ({ ...props }: Props) => {
  const { publication, onEdit, onDelete } = props;

  const [dialogOpen, setDialogOpen] = useState(false);
  console.log('publication-card: ', publication);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className='w-full transition-all duration-300 ease-in-out transform px-2 py-0 my-0'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className='relative pb-0'>
        <div className='flex items-center justify-between'>
          <div className='w-10 h-10 relative rounded-t-lg overflow-hidden'>
            <Image
              src={publication.logo || '/placeholder.svg'}
              alt={`${publication.name} cover`}
              layout='fill'
              objectFit='cover'
            />
          </div>

          <div className='flex items-center justify-center'>
            <AddEditPublicationDialog publication={publication} />

            {isHovered && (
              <Button
                variant='outline'
                size='sm'
                onClick={() => onDelete(publication.id)}
              >
                <Trash2 className='w-4 h-4' />
                <span className='sr-only'>Delete</span>
              </Button>
            )}
          </div>
        </div>

        <CardTitle className='px-2 text-xl mt-4'>{publication.name}</CardTitle>
        <CardDescription className='px-2 flex items-center mt-1'>
          <Globe className='w-4 h-4 mr-1' />
          <a
            href={`https://${publication.url}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            {publication.url}
          </a>
        </CardDescription>
      </CardHeader>

      <CardContent className='p-0 m-0'>
        <p className='text-sm text-gray-600 mb-4 line-clamp-2'>
          {publication.description}
        </p>
        <ScrollArea className='h-12'>
          <div className='flex flex-wrap gap-2'>
            {publication.keywords.map((keyword, index) => (
              <Badge key={index} variant='secondary'>
                {keyword}
              </Badge>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default PublicationCard;
