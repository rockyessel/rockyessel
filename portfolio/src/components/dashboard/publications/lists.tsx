'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { PublicationType } from '@/types';
import { Plus, Search } from 'lucide-react';
import { useState, useTransition } from 'react';
import AddEditPublicationDialog from './publication-dialog';
import PublicationCard from './card';
import {
  createPublication,
  updatePublication,
} from '@/lib/actions/convex_/publications';

interface Props {
  publications: PublicationType[];
}

const PublicationLists = ({ publications }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPublication, setEditingPublication] =
    useState<PublicationType>();

  const [isCreatingPub, startCreatingPub] = useTransition();
  const [isUpdatingPub, startUpdatingPub] = useTransition();

  const filteredPublications = publications.filter(
    (pub) =>
      pub?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub?.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub?.keywords?.some((keyword) =>
        keyword?.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleEdit = (publication: PublicationType) => {
    setEditingPublication(publication);
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    toast({
      title: 'PublicationType Deleted',
      description: 'The publication has been successfully deleted.',
    });
  };

  const handleSave = (publicationData: PublicationType) => {
    if (editingPublication) {
      startUpdatingPub(async () => {
        const publication = await updatePublication(editingPublication);
        if (publication) {
          toast({
            title: 'PublicationType Updated',
            description: 'The publication has been successfully updated.',
          });

          return;
        }
      });
    } else {
      const newPublication = { ...publicationData };
      startCreatingPub(async () => {
        const publication = await createPublication(newPublication);
        if (publication) {
          toast({
            title: 'PublicationType Added',
            description: 'The new publication has been successfully added.',
          });
          return;
        }
      });
    }
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>Your Publications</h1>
        <AddEditPublicationDialog
          publication={editingPublication}
          onSave={handleSave}
        />
      </div>
      <div className='relative mb-6'>
        <Input
          type='text'
          placeholder='Search publications...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='pl-10'
        />
        <Search className='w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
      </div>
      {filteredPublications.length === 0 ? (
        <p className='text-center text-gray-500'>No publications found.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredPublications.map((publication, index) => (
            <PublicationCard
              key={index}
              publication={publication}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PublicationLists;
