'use client';

import { cn, createSlug } from '@/lib/utils/helpers';
import { BookCheck, ChevronDown, ChevronRight } from 'lucide-react';
import { generateTOC } from '../editor/lib/helpers';
import { useState } from 'react';
import { Descendant } from 'slate';

interface Props {
  className?: string;
  content: Descendant[];
}

const PostTOCAside = ({ className, content }: Props) => {
  const toc = generateTOC(content);

  return (
    <div className={cn(className, 'max-w-[16rem] w-full sticky top-16')}>
      <div className='flex flex-col items-start gap-5'>
        <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900'>
          <p className='flex items-center font-semibold'>
            <BookCheck className='h-4 w-4 mr-2' />
            Table of Contents
          </p>
          <nav>
            <ul className='space-y-2'>
              {toc.map((item, index) => (
                <TOCItem key={index} item={item} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PostTOCAside;

interface TOCHeaderType {
  text: string;
  children: TOCHeaderType[];
}

const TOCItem = ({ item }: { item: TOCHeaderType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headingId = createSlug(item.text);

  return (
    <li className='text-sm'>
      <div className='flex items-center'>
        {item.children.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='mr-2 focus:outline-none'
          >
            {isOpen ? (
              <ChevronDown className='h-4 w-4' />
            ) : (
              <ChevronRight className='h-4 w-4' />
            )}
          </button>
        )}
        <a
          href={`#${headingId}`}
          className='text-blue-500 hover:text-blue-600 transition-colors'
        >
          {item.text}
        </a>
      </div>
      {item.children.length > 0 && isOpen && (
        <ul className='pl-4 mt-2 space-y-2'>
          {item.children.map((child, index) => (
            <TOCItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};
