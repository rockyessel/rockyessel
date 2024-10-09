import { domainURL } from '@/lib/utils/helpers';
import React from 'react';

interface Props {
  publishedAt: string;
  updatedAt: string;
  title: string;
  slug: string;
  description: string;
  ogImage: string[];
  content: string;
  lang: string;
  category: string;
  audioURL: string;
  keywords: string[];
  comment?: {
    name: string;
    content: string;
    updatedAt: string;
  };
}

const ScriptJsonLDArticle = ({
  description,
  ogImage,
  publishedAt,
  slug,
  title,
  updatedAt,
  content,
  category,
  audioURL,
  lang = 'en-US',
  keywords,
  comment,
}: Props) => {
  const userProfiles = [
    'https://x.com/rockyessel',
    'https://dev.to/rockyessel',
    'https://github.com/rockyessel',
    'https://medium.com/@rockyessel',
    'https://rockyessel.hashnode.dev',
    'https://roadmap.sh/u/rockyessel',
    'https://facebook.com/rockyessell',
    'https://app.daily.dev/rockyessel',
    'https://leetcode.com/u/rockyessel',
    'https://instagram.com/rockyessell',
    'https://www.tiktok.com/@rockyessel',
    'https://linkedin.com/in/rockyessel',
    'https://mastodon.world/@rockyessel',
    'https://www.threads.net/@rockyessel',
    'https://www.youtube.com/@rockyessel',
    'https://hackernoon.com/u/rockyessel',
    'https://www.pinterest.com/rockyessel',
    'https://freecodecamp.org/news/author/rockyessel',
  ];

  // Function to calculate reading time in minutes
  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.split(' ').length;
    const timeInMinutes = Math.ceil(wordCount / wordsPerMinute);
    return timeInMinutes;
  };

  // Convert minutes to ISO 8601 duration (e.g., 'PT25M' for 25 minutes)
  const convertToISODuration = (minutes: number) => {
    return `PT${minutes}M`;
  };

  const estimatedTime = calculateReadingTime(content);
  const timeRequired = convertToISODuration(estimatedTime);

  const publishedYear = new Date(publishedAt).getFullYear();
  const updatedYear = new Date(updatedAt).getFullYear();

  const copyrightYear =
    publishedYear === updatedYear
      ? publishedYear
      : `${publishedYear}-${updatedYear}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${domainURL(`/${slug}`)}`,
    },
    headline: title,
    name: `${title} | ${updatedYear}`,
    description: description,
    image: ['https://avatars.githubusercontent.com/u/97303710?v=4', ...ogImage],
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      '@type': 'Person',
      name: 'Rocky Essel',
      url: `${domainURL()}`,
      image: 'https://avatars.githubusercontent.com/u/97303710?v=4',
      sameAs: [...userProfiles],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rocky Essel',
      logo: {
        '@type': 'ImageObject',
        url: 'https://avatars.githubusercontent.com/u/97303710?v=4',
        width: '600',
        height: '600',
      },
    },
    keywords: keywords.join(','),
    articleBody: content,
    wordCount: content.split(' ').length,
    inLanguage: lang,
    timeRequired: timeRequired,
    copyrightYear: copyrightYear,
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Rocky Essel',
    },
    articleSection: category,
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    hasPart: [
      {
        '@type': 'WebPageElement',
        isAccessibleForFree: 'True',
        cssSelector: '.article-section',
      },
      {
        '@type': 'AudioObject',
        name: `${title} - Audio Version`,
        description: description,
        contentUrl: audioURL,
        duration: 'PT25M', //TODO: dynamically render the audio durations in minutes
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-header', '.article-summary'],
    },
    comment: {
      '@type': 'Comment',
      text: comment.content,
      author: {
        '@type': 'Person',
        name: comment.name,
      },
      datePublished: comment.updatedAt,
    },
    commentCount: 15,
    potentialAction: {
      '@type': 'ReadAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${domainURL(`/${slug}`)}`,
      },
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default ScriptJsonLDArticle;
