'use client';

import { Edit, Plus } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useFileUpload } from '@/hooks/use-file-upload';
import ValueSelector from '@/components/common/value-selector';
import { PubKeyType, PublicationType, PubValueType } from '@/types';
import { useState, Fragment, useEffect, useTransition } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  createPublication,
  updatePublication,
} from '@/lib/actions/convex_/publications';
import { toast } from 'sonner';
import Image from 'next/image';
import { domainURL } from '@/lib/utils/helpers';
import axios from 'axios';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  publication?: PublicationType;
}

// type FormDataType = Omit<PublicationType, '_id' | '_creationTime' | 'slug'>;

const AddEditPublicationDialog = ({ ...props }: Props) => {
  const { publication } = props;
  const [editablePub, setEditablePub] = useState<PublicationType | undefined>(
    publication
  );
  const { file, handleFileSelection, isUploading } = useFileUpload();
  const [isError, setIsError] = useState(false);

  const [isCreatingPub, startCreatingPub] = useTransition();
  const [isUpdatingPub, startUpdatingPub] = useTransition();

  const isShown = publication ? true : false || isError;

  console.log('file: ', file);
  console.log('editablePub: ', editablePub);

  const [showAdvanced, setShowAdvanced] = useState(false);

  const updatePub = <K extends PubKeyType>(key: K, values: PubValueType[K]) => {
    // @ts-ignore
    setEditablePub((p) => {
      const updatedPub = { ...p, [key]: values };
      return updatedPub;
    });
  };

  useEffect(() => {
    updatePub('logo', file?.fileUrl);
  }, [file]);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // @ts-ignore
    setEditablePub((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Updating
    if (publication && editablePub) {
      startUpdatingPub(async () => {
        const publication = await updatePublication(editablePub);
        if (publication) {
          toast.success(
            <p className='inline-flex flex-col gap-0.5'>
              <span className='font-bold'>Publication Updated</span>
              <span>The publication has been successfully updated.</span>
            </p>
          );
        }
        return;
      });
    }

    // new
    if (!publication && editablePub) {
      startCreatingPub(async () => {
        if (!editablePub.url) {
          toast.error('No LINK provided');
          return;
        }

        try {
          const { data: urlData } = await axios.post(domainURL('/api/pub'), {
            siteUrl: editablePub.url,
          });

          console.log({ urlData });

          const publication_ = await createPublication(urlData);
          if (publication_) {
            toast.success(
              <p className='inline-flex flex-col gap-0.5'>
                <span className='font-bold'>Publication Added</span>
                <span>The new publication has been successfully added.</span>
              </p>
            );
            return;
          }
        } catch (error) {
          console.error('error: ', error);
          setIsError(true);
        }
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        {publication ? (
          <span className='mr-2 text-gray-300 inline-flex items-center'>
            <Edit className='w-4 h-4 mr-2' />
            Edit
          </span>
        ) : (
          <span className='flex items-center'>
            <Plus className='w-4 h-4 mr-2' />
            Add PublicationType
          </span>
        )}
      </DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>
            {publication ? 'Edit Publication' : 'Add New Publication'}
          </DialogTitle>
          <DialogDescription>
            {publication
              ? 'Edit the details of your publication here.'
              : 'Enter the details of your new publication here.'}
          </DialogDescription>
        </DialogHeader>

        {publication && (
          <div className='flex items-center mb-3 last:mb-0'>
            <div className='flex-shrink-0 mr-2'>
              {publication.logo ? (
                <Image
                  src={publication.logo}
                  alt={`${publication.name} logo`}
                  width={40}
                  height={40}
                  className='rounded-full w-5 h-5'
                />
              ) : (
                'No Image'
              )}
            </div>
            <p className='text-lg font-semibold'>{publication.name}</p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className='bg-transparent w-full space-y-6'
        >
          <div className='space-y-2'>
            <Label htmlFor='url'>URL</Label>
            <Input
              id='url'
              name='url'
              type='url'
              placeholder='https://example.com'
              value={editablePub?.url}
              onChange={handleInputChange}
              required
            />
          </div>

          {isShown && (
            <div>
              {isError && (
                <p className='w-full text-rose-600 underline'>
                  Failed to get information. Either refresh the page and fill it
                  manually below.
                </p>
              )}

              <div className='flex items-center space-x-2'>
                <Switch
                  id='advanced-mode'
                  checked={showAdvanced}
                  onCheckedChange={setShowAdvanced}
                />
                <Label htmlFor='advanced-mode'>Show advanced options</Label>
              </div>

              {showAdvanced && (
                <Fragment>
                  <div className='space-y-2'>
                    <Label>{publication ? 'Change logo' : 'Logo'}</Label>
                    {editablePub?.logo ? (
                      <>Image here</>
                    ) : (
                      <div className='mt-2'>
                        <Input
                          disabled={!publication}
                          id='logo-file-input'
                          type='file'
                          accept='image/*'
                          onChange={handleFileSelection}
                        />
                      </div>
                    )}
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='url'>Description</Label>
                    <Textarea
                      id='description'
                      name='description'
                      placeholder={
                        publication
                          ? `${publication.name} desription...`
                          : 'Enter a description'
                      }
                      value={editablePub?.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='keywords'>Keywords</Label>
                    <ValueSelector<string>
                      limit={8}
                      initialValues={editablePub?.keywords}
                      placeholder='Enter keywords...'
                      onChange={(keywords) => updatePub('keywords', keywords)}
                    />
                  </div>
                </Fragment>
              )}
            </div>
          )}
          <Button type='submit'>
            {publication ? 'Update publication.' : 'Add Publication.'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditPublicationDialog;
