'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { IPublication } from '@/types';
import { Plus, Search } from 'lucide-react';
import { useState } from 'react';
import AddEditPublicationDialog from './publication-dialog';
import PublicationCard from './card';

interface Props {
  publications: IPublication[];
}

const PublicationLists = ({ publications }: Props) => {
  console.log('publications: ', publications);
  const [publicationLists, setPublicationLists] = useState(publications);
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPublication, setEditingPublication] = useState<IPublication>();

  console.log('editingPublication: ', editingPublication);

  const filteredPublications = publicationLists.filter(
    (pub) =>
      pub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleEdit = (publication: IPublication) => {
    setEditingPublication(publication);
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setPublicationLists((prev) => prev.filter((pub) => pub.id !== id));
    toast({
      title: 'IPublication Deleted',
      description: 'The publication has been successfully deleted.',
    });
  };

  const handleSave = (publicationData: Omit<IPublication, 'id'>) => {
    if (editingPublication) {
      setPublicationLists((prev) =>
        prev.map((pub) =>
          pub.id === editingPublication.id
            ? { ...pub, ...publicationData }
            : pub
        )
      );
      toast({
        title: 'IPublication Updated',
        description: 'The publication has been successfully updated.',
      });
    } else {
      const newPublication = {
        ...publicationData,
        id: Date.now().toString(), // Simple ID generation
      };
      setPublicationLists((prev) => [...prev, newPublication]);
      toast({
        title: 'IPublication Added',
        description: 'The new publication has been successfully added.',
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
          {filteredPublications.map((publication) => (
            <PublicationCard
              key={publication.id}
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
