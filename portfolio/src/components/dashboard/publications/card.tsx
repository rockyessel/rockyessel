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
import Link from 'next/link';
import { domainURL } from '@/lib/utils/helpers';

interface Props {
  publication: PublicationType;
  onEdit: (publication: PublicationType) => void;
  onDelete: (id: string) => void;
}

const PublicationCard = ({ ...props }: Props) => {
  const { publication, onEdit, onDelete } = props;

  const [dialogOpen, setDialogOpen] = useState(false);
  console.log('publication-card: ', publication);

  return (
    <Card className='w-full transition-all duration-300 ease-in-out transform px-2 py-0 my-0'>
      <CardHeader className='relative m-0 p-0 py-3'>
        <div className='flex items-center justify-between'>
          <div className='rounded-t-lg overflow-hidden'>
            <div>
              <CardTitle className='flex items-center text-xl px-0'>
                <div>
                  {publication.logo ? (
                    <Image
                      src={publication?.logo}
                      alt={`${publication?.name} cover`}
                      width={50}
                      height={50}
                      className='w-[16px] h-[16px] mr-2 rounded-sm'
                    />
                  ) : (
                    'No image'
                  )}
                </div>
                {publication?.name}
              </CardTitle>
              <span className='inline-flex items-center'>
                <Globe className='w-4 h-4 mr-2 text-gray-300' />
                <a
                  href={`{publication?.url}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  {publication?.url}
                </a>
              </span>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <AddEditPublicationDialog publication={publication} />

            <Button
              variant='outline'
              size='sm'
              onClick={() => onDelete(publication?._id)}
            >
              <Trash2 className='w-4 h-4' />
              <span className='sr-only'>Delete</span>
            </Button>

            <Link
              href={domainURL(`/dashboard/publications/${publication?._id}`)}
              className='text-gray-300 inline-flex items-center gap-2'
            >
              <Trash2 className='w-4 h-4' />
              <span className=''>Add Articles</span>
            </Link>
          </div>
        </div>

        <CardDescription className='px-2 flex items-center mt-1'></CardDescription>
      </CardHeader>

      <CardContent className='p-0 m-0'>
        <p className='text-sm text-gray-600 mb-4 line-clamp-2'>
          {publication?.description}
        </p>
        <ScrollArea className='h-12'>
          <div className='flex flex-wrap gap-2'>
            {publication?.keywords?.map((keyword, index) => (
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
