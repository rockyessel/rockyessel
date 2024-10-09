import { Tabs, TabsContent } from '@/components/ui/tabs';
import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';
import WritingSettingsSEO from '@/components/dashboard/writings/settings/seo';
import WritingSettingsGeneral from '@/components/dashboard/writings/settings/general';
import WritingSettingsComments from '@/components/dashboard/writings/settings/comments';
import WritingSettingsAside from '@/components/dashboard/writings/common/writing-settings-aside';
import { getPostById } from '@/lib/actions/convex_/posts';
import { notFound } from 'next/navigation';
import { getPostDraftById } from '@/lib/actions/convex_/post-drafts';

interface Props {
  params: { id: string };
}

const WritingSettingsPage = async ({ params }: Props) => {
  const draft = await getPostDraftById(params.id);

  if (!draft) return notFound();

  return (
    <DashboardSidebarLayout allowNavbar>
      <Tabs
        defaultValue='general'
        className='max-w-[1400px] mx-auto w-full flex items-start'
      >
        <section className='flex items-start gap-5'>
          <WritingSettingsAside draft={draft} />
          <div>
            <TabsContent value='general'>
              <WritingSettingsGeneral draft={draft} />
            </TabsContent>
            <TabsContent value='seo'>
              <WritingSettingsSEO draft={draft} />
            </TabsContent>
            <TabsContent value='comments'>
              <WritingSettingsComments />
            </TabsContent>
          </div>
        </section>
      </Tabs>
    </DashboardSidebarLayout>
  );
};

export default WritingSettingsPage;
