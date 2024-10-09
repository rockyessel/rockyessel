import AsideContentLayout from '@/components/layout/aside-content';
import { getPublishedPosts } from '@/lib/actions/convex_/posts';
import { domainURL, isContentNew, truncate } from '@/lib/utils/helpers';
import {
  ThumbsUp,
  Eye,
  MessageSquare,
  Bookmark,
  Share2,
  Clock,
  Tag,
  SquareLibrary,
} from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';



import { getPageSEO } from '@/lib/actions/helpers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageSEO('writings');
}




const WritingsPage = async () => {
  const posts = await getPublishedPosts();

  // const isPostContentNew = isContentNew(post?.publishedAt);

  return (
    <AsideContentLayout isWriting>
      <div className='w-full'>
        {/* <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900' /> */}

        <div className='flex flex-col gap-2'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='bg-neutral-800 text-white p-6 rounded-lg border border-zinc-700/40'
            >
              <div className='mb-4 flex items-center gap-2'>
                <p className='inline-flex items-center bg-black/50 border border-zinc-700/40 text-xs p-1.5 rounded-md'>
                  <SquareLibrary className='h-4 w-4 mr-2' /> {post?.postType}
                </p>
                {post?.isFeatured && (
                  <p className='border border-zinc-700/40 text-xs font-semibold p-1.5 rounded-md'>
                    FEATURED
                  </p>
                )}
                {isContentNew(post?.publishedAt) && (
                  <p className='bg-lime-600 border border-zinc-700/40 text-xs font-semibold p-1.5 rounded-md'>
                    New
                  </p>
                )}
              </div>
              <h2 className='text-2xl font-bold mb-3 text-blue-400 hover:text-blue-300 transition-colors duration-200'>
                <a
                  className='w-full'
                  target='_blank'
                  href={domainURL(`/${post?.slug}`)}
                >
                  {post?.title}
                </a>
              </h2>
              <div className='flex items-center text-gray-400 text-sm mb-4'>
                <Clock size={14} className='mr-1' />
                <span className='mr-4'>
                  {moment(post?.publishedAt || post?.createdAt).format(
                    'MMM Do YYYY'
                  )}
                </span>
                <div className='flex items-center mr-4'>
                  <Eye size={14} className='mr-1' />
                  <span>1.2k views</span>
                </div>
                <div className='flex items-center'>
                  <ThumbsUp size={14} className='mr-1' />
                  <span>142 likes</span>
                </div>
              </div>
              <p className='text-gray-300 mb-4'>
                {truncate(
                  String(post?.description || post?.seoDescription),
                  165
                )}
              </p>
              {/* <div className='flex items-center mb-4'>
                <div className='w-10 h-10 rounded-full bg-gray-600 mr-3 flex items-center justify-center text-lg font-bold'>
                  JD
                </div>
                <div>
                  <p className='font-semibold text-blue-400'>John Doe</p>
                  <p className='text-xs text-gray-400'>
                    Senior Developer @ TechCo
                  </p>
                </div>
              </div> */}
              <div className='flex items-center flex-wrap gap-2 mb-4'>
                <Tag size={14} className='text-blue-400' />
                {post?.tags?.slice(0, 3)?.map((tag, index) => (
                  <span
                    key={index}
                    className='text-xs bg-gray-700 px-2 py-1 rounded'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex space-x-4'>
                  <button className='flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200'>
                    <MessageSquare size={18} className='mr-2' />
                    <span>12 comments</span>
                  </button>
                  <button className='flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200'>
                    <Bookmark size={18} className='mr-2' />
                    <span>Save</span>
                  </button>
                  <button className='flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200'>
                    <Share2 size={18} className='mr-2' />
                    <span>Share</span>
                  </button>
                </div>
                <span className='text-gray-400 text-sm'>5 min read</span>
              </div>
              <div className='mt-4 pt-4 border-t border-gray-700'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    <Link
                      href={domainURL(`/${post?.slug}`)}
                      className='bg-black hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200'
                    >
                      Read More
                    </Link>
                  </div>
                  <div className='text-gray-400 text-sm'>
                    Last updated:{' '}
                    {moment(post?.updatedAt).startOf('hour').fromNow()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AsideContentLayout>
  );
};

export default WritingsPage;
