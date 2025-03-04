import { HTMLProps } from 'react';
import { Doc, Id } from '../../convex/_generated/dataModel';
import { CATEGORIES } from '@/lib/utils/constants';

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
export type PostValueType = PostType[PostKeyType];

export type PostDraftType = Doc<'posts_draft'>;
export type PostDraftKeyType = keyof PostDraftType;
export type PostDraftValueType = PostDraftType[PostDraftKeyType];

export type FileType = Doc<'files'>;

export type PubArticleType = {
  _id: Id<'publications'>;
  _creationTime: number;
  title?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  name?: string | undefined;
  pubId?: Id<'publications'> | undefined;
  logo?: string | undefined;
  keywords?: string[] | undefined;
  url: string;
  articles: ArticleType[];
}[];

export type PublicationType = Doc<'publications'>;
export type PubKeyType = keyof PublicationType;
export type PubValueType = { [K in PubKeyType]: PublicationType[K] };

export type ArticleType = Doc<'pub_articles'>;

export type CategoryKeysType = keyof typeof CATEGORIES;

export interface IPageJsonLd {
  baseJsonLd: {
    '@type': string;
    itemListElement: {
      '@type': string;
      position: number;
      name: string;
      applicationCategory: string;
      url: string;
    }[];
  };
  '@context': string;
  '@type': string | string[];
  '@id': string;
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  isPartOf: {
    '@type': string;
    '@id': string;
    url: string;
    name: string;
    description: string;
    publisher: {
      '@type': string;
      name: string;
      url: string;
    };
  };
  image?: {
    '@type': string;
    '@id': string;
    url: string;
    width: number;
    height: number;
    caption: string;
  };
  primaryImageOfPage?: {
    '@id': string;
  };
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': string;
    '@id': string;
    name: string;
    url: string;
    description: string;
    sameAs: string[];
  };
  about?: Array<{
    '@type': string;
    name: string;
    description: string;
    url: string;
  }>;
  mentions?: Array<{
    '@type': string;
    name: string;
    url: string;
  }>;
  mainEntity?: {
    '@type': string;
    '@id'?: string;
    name?: string;
    url?: string;
    knowsAbout?: string[];

    itemListElement?: Array<{
      '@type': string;
      position: number;
      name: string;
      headline?: string;
      applicationCategory?: string;
      url: string;
    }>;
  };
}
