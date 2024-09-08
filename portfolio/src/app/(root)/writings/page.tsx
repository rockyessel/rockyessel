import { Skeleton } from '@/components/common/utilities';
import ProfileLayout from '@/components/layout/profile';
import { IconClipboardCopy } from '@tabler/icons-react';

const WritingsPage = () => {
  return (
    <ProfileLayout className='gap-3'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2 sticky top-12 bg-neutral-900'>
          <p>Writing Platforms</p>
          <div className='flex items-center gap-2'>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              hackernoon <span>25</span>
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              freecodecamp <span>35</span>
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              hashnode <span>5</span>
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              medium <span>15</span>
            </p>
            <p className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 text-sm'>
              symbion <span>52</span>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p>Pinned</p>
          <div className='flex items-start gap-5'>
            <div className='w-full max-w-2xl flex flex-col gap-2'>
              {Array.from({ length: 40 }).map((_, index) => (
                <div
                  key={index}
                  className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1'
                >
                  <p className='text-xl'>
                    Build-Time Syntax Highlighting: Zero Client-Side JS, Support
                    for 100+ Languages and Any VSCode Theme
                  </p>

                  <p className='text-sm text-gray-500'>Aug 24, 2024</p>

                  <p className=''>
                    {` Leverage VS Code's ecosystem to generate highly accurate syntax
                highlighting at build time. With zero performance cost and access
                to the entire VS Code theme catalog.`}
                  </p>
                </div>
              ))}
            </div>
            <div className='border border-zinc-700/40 rounded-md w-fit bg-zinc-800/40 p-1 sticky top-28'></div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default WritingsPage;
