'use client';

import { toast } from 'sonner';
import { fileUpload } from '@/lib/convex';
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from 'react';
import { FileType } from '@/types';

export const useFileUpload = () => {
  const [file, setFile] = useState<File>();
  const [fileObj, setFileObj] = useState<FileType>();
  const [isUploading, setUploading] = useTransition();

  const handleFileSelection = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    if (target.files) {
      const selectedFile = target.files[0];
      setFile(selectedFile);
    }
  };

  const handleUpload = useCallback(() => {
    if (!file) {
      toast.error('No file selected');
      return;
    }
    setUploading(async () => {
      const fileObj = await fileUpload(file);
      if (fileObj?._creationTime) {
        setFileObj(fileObj);
        toast.success('Uploaded successfully.');
        return;
      }
    });
  }, [file]);

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file, handleUpload]);

  return { file: fileObj, handleFileSelection, isUploading };
};
