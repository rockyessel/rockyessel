import CreatePost from '@/components/actions/create-post';
import WritingTable from '@/components/dashboard/writings/table';
import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';
import { getPostDrafts } from '@/lib/actions/convex_/post-drafts';

const WritingsPage = async () => {
  const drafts = await getPostDrafts();

  return (
    <DashboardSidebarLayout allowNavbar>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold'>My Writings</h1>
          <CreatePost />
        </div>

        <WritingTable drafts={drafts} />
      </div>
    </DashboardSidebarLayout>
  );
};

export default WritingsPage;
