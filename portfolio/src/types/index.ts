import { HTMLProps } from 'react';
import { Doc } from '../../convex/_generated/dataModel';

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  liveSite: string;
  images: string[];
  video: string;
}

export interface IProject {
  readme: string;
  general: {
    name: string;
    slug: string;
    description: string;
    sourceCode: string;
    demo: string;
    tags: string[];
  };
  technicalDetails: {
    type: 'web2' | 'web3';
    language: string;
    frameworks: string;
  };
  media: {
    images: string[];
    videos: string[];
    documents: { name: string; url: string };
  };
}

export interface HTMLDivProps extends HTMLProps<HTMLDivElement> {}

export interface IPublication {
  id: string;
  name: string;
  url: string;
  logo: string;
  description: string;
  keywords: string[];
}

export interface IPublicationArticle {
  id: string;
  title: string;
  url: string;
  description: string;
  coverImage: string;
  tags: string[];
}

// Post Type
export type PostType = Doc<'posts'>;
export type PostKeyType = keyof PostType;
export type PostValueType = PostType[keyof PostType];
