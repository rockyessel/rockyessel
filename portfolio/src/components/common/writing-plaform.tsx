'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PubArticleType } from '@/types';
import { Fragment, useState } from 'react';

interface Props {
  pubs: PubArticleType;
}

const WritingPlatform = ({ pubs }: Props) => {
  const [visibleArticles, setVisibleArticles] = useState<{
    [key: number]: boolean;
  }>({});
  const [visibleCount, setVisibleCount] = useState<number>(2); // Limit to 2 publications initially
  const [showAll, setShowAll] = useState<boolean>(false); // Track if all pubs are shown or not

  // Toggle visibility of articles for a given publication
  const toggleArticles = (index: number) => {
    setVisibleArticles((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Show or hide all publications
  const handleShowToggle = () => {
    if (showAll) {
      setVisibleCount(2); // Collapse back to 2 publications
    } else {
      setVisibleCount(pubs.length); // Show all publications
    }
    setShowAll(!showAll); // Toggle the button text
  };

  return (
    <section className='mb-8'>
      <h2 className='text-xl font-semibold'>Writing Platform</h2>
      <div className='grid grid-cols-1 gap-6 mt-4'>
        {pubs.slice(0, visibleCount).map((pub, index) => (
          <Fragment key={index}>
            <Card className='w-full transition-all duration-300 ease-in-out transform px-2 py-0 my-0'>
              <CardHeader className='relative m-0 p-0 py-3'>
                <div className='rounded-t-lg overflow-hidden'>
                  <div className='w-full flex items-center justify-between'>
                    <CardTitle className='flex items-center text-xl px-0'>
                      <div>
                        {pub.logo ? (
                          <Image
                            src={pub?.logo}
                            alt={`${pub?.name} cover`}
                            width={50}
                            height={50}
                            className='w-[16px] h-[16px] mr-2 rounded-sm'
                          />
                        ) : (
                          'No image'
                        )}
                      </div>
                      {pub?.name}
                    </CardTitle>
                    <span className='inline-flex items-center gap-2'>
                      <a
                        href={`${pub?.url}/?rel=rockyessel.me`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500 hover:underline'
                      >
                        <ExternalLink strokeWidth={2.25} className='w-4 h-4' />
                      </a>

                      <button
                        onClick={() => toggleArticles(index)}
                        className='px-2 py-1 border border-zinc-700/40 rounded-md bg-neutral-900 text-gray-300'
                      >
                        {visibleArticles[index] ? 'Hide' : 'Show'}{' '}
                        {pub?.articles?.length} Articles
                      </button>
                    </span>
                  </div>
                </div>

                <CardDescription className='px-2 flex items-center mt-1'></CardDescription>
              </CardHeader>

              <CardContent className='p-0 m-0'>
                <p className='sr-only'>{pub?.description}</p>
              </CardContent>
            </Card>

            {/* Conditionally render the articles based on visibility */}
            {visibleArticles[index] && (
              <div className='ml-10'>
                {pub.articles.map((article, articleIndex) => (
                  <div key={articleIndex}>{article.title}</div>
                ))}
              </div>
            )}
          </Fragment>
        ))}

        {/* Show more or Hide button */}
        {pubs.length > 2 && (
          <button
            onClick={handleShowToggle}
            className='px-4 py-2 mt-4 border border-zinc-700/40 rounded-md bg-neutral-900 text-gray-300'
          >
            {showAll ? 'Hide Publications' : 'Show More Publications'}
          </button>
        )}
      </div>
    </section>
  );
};

export default WritingPlatform;
