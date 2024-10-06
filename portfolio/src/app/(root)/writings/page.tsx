import AsideContentLayout from '@/components/layout/aside-content';
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

const WritingsPage = () => {
  return (
    <AsideContentLayout isWriting>
      <div className='w-full'>
        {/* <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900' /> */}

        <div className='flex flex-col gap-2'>
          {Array.from({ length: 40 }).map((_, index) => (
            <div
              key={index}
              className='bg-neutral-800 text-white p-6 rounded-lg border border-zinc-700/40'
            >
              <div className='mb-4 flex items-center gap-2'>
                <p className='inline-flex items-center bg-black/50 border border-zinc-700/40 text-xs p-1.5 rounded-md'>
                  <SquareLibrary className='h-4 w-4 mr-2' /> WEB 2.0
                </p>
                <p className='border border-zinc-700/40 text-xs font-semibold p-1.5 rounded-md'>
                  FEATURED
                </p>
              </div>
              <h2 className='text-2xl font-bold mb-3 text-blue-400 hover:text-blue-300 transition-colors duration-200'>
                Build-Time Syntax Highlighting: Zero Client-Side JS, Support for
                100+ Languages and Any VSCode Theme
              </h2>
              <div className='flex items-center text-gray-400 text-sm mb-4'>
                <Clock size={14} className='mr-1' />
                <span className='mr-4'>Aug 24, 2024</span>
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
                Leverage VS Code's ecosystem to generate highly accurate syntax
                highlighting at build time. With zero performance cost and
                access to the entire VS Code theme catalog.
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
              <div className='flex flex-wrap gap-2 mb-4'>
                <Tag size={14} className='text-blue-400' />
                <span className='text-xs bg-gray-700 px-2 py-1 rounded'>
                  VSCode
                </span>
                <span className='text-xs bg-gray-700 px-2 py-1 rounded'>
                  Syntax Highlighting
                </span>
                <span className='text-xs bg-gray-700 px-2 py-1 rounded'>
                  JavaScript
                </span>
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
                    <button className='bg-black hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200'>
                      Read More
                    </button>
                  </div>
                  <div className='text-gray-400 text-sm'>
                    Last updated: 2 days ago
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
