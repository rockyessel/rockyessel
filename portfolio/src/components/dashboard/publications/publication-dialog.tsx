'use client';

import { useState, useRef, Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { IPublication } from '@/types';
import ValueSelector from '@/components/common/value-selector';
import { Edit, Plus } from 'lucide-react';

interface Props {
  publication?: IPublication;
  onSave: (publication: Omit<IPublication, 'id'>) => void;
}

const AddEditPublicationDialog = ({ ...props }: Props) => {

  const { publication, onSave } = props;
  console.log('publication: ',publication)
  const [formData, setFormData] = useState<Omit<IPublication, 'id'>>(
    publication || {
      name: '',
      url: '',
      logo: '',
      description: '',
      keywords: [],
    }
  );

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [logoType, setLogoType] = useState<'file' | 'url'>('file');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, logoFile: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'logoFile' && value) {
        formData.append('logo', value);
      } else if (typeof value === 'string') {
        formData.append(key, value);
      }
    });
    console.log('Publication data:', Object.fromEntries(formData));
    // Here you would typically send the formData to your backend
  };

  return (
    <Dialog >

      <DialogTrigger>
      
      {publication ?   <Button
              variant='secondary'
              size='sm'
              className='mr-2'
            >
              <Edit className='w-4 h-4 mr-2' />
              Edit
            </Button>:  <Button
          className='flex items-center'
        >
          <Plus className='w-4 h-4 mr-2' />
          Add IPublication
        </Button>}
      
      
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
              value={formData.url}
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
                <RadioGroup
                  value={logoType}
                  onValueChange={(value: 'file' | 'url') => setLogoType(value)}
                >
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='file' id='logo-file' />
                    <Label htmlFor='logo-file'>Upload File</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='url' id='logo-url' />
                    <Label htmlFor='logo-url'>Provide URL</Label>
                  </div>
                </RadioGroup>
                {logoType === 'file' ? (
                  <div className='mt-2'>
                    <Input
                      id='logo-file-input'
                      type='file'
                      accept='image/*'
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                  </div>
                ) : (
                  <div className='mt-2'>
                    <Input
                      id='logo'
                      name='logo'
                      type='url'
                      placeholder='https://example.com/logo.png'
                      value={formData.logo}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='keywords'>Keywords</Label>
                <ValueSelector<string>
                  limit={8}
                  initialValues={formData.keywords}
                  placeholder='Enter keywords...'
                  onChange={(values) => console.log('keywords: ', values)}
                />
              </div>
            </Fragment>
          )}

          <Button type='submit'>Add publication</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditPublicationDialog;
