import { fetchMutation } from 'convex/nextjs';
import { api } from '../../../convex/_generated/api';
import { Id } from '../../../convex/_generated/dataModel';

export const postsMethod = api.core.posts.main;
export const postDraftsMethod = api.core.posts.draft;
export const storageMethod = api.core.storage;
export const publicationsMethod = api.core.publications.index;
export const newslettersMethod = api.core.newsletter.index;

export const fileUpload = async (file: File) => {
  const uploadURL = await fetchMutation(storageMethod.file.generateUploadUrl);
  const result = await fetch(uploadURL, {
    method: 'POST',
    headers: { 'Content-Type': file.type },
    body: file,
  });
  const { storageId } = await result.json();

  const fileObj = await fetchMutation(storageMethod.file.createFile, {
    storageId,
    mimeType: file.type,
  });

  return fileObj;
};
