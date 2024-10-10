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

  const [isCreatingPub, startCreatingPub] = useTransition();
  const [isUpdatingPub, startUpdatingPub] = useTransition();

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
        const publication_ = await createPublication(editablePub);
        if (publication_) {
          toast.success(
            <p className='inline-flex flex-col gap-0.5'>
              <span className='font-bold'>Publication Added</span>
              <span>The new publication has been successfully added.</span>
            </p>
          );
          return;
        }
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        {publication ? (
          <span className='mr-2'>
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
                <Label>Logo</Label>
                {editablePub?.logo ? (
                  <>Image here</>
                ) : (
                  <div className='mt-2'>
                    <Input
                      id='logo-file-input'
                      type='file'
                      accept='image/*'
                      onChange={handleFileSelection}
                    />
                  </div>
                )}
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

          <Button type='submit'>
            {publication ? 'Update publication.' : 'Add Publication.'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditPublicationDialog;