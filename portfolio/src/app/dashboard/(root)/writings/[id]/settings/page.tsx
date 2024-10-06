import { Tabs, TabsContent } from '@/components/ui/tabs';
import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';
import WritingSettingsSEO from '@/components/dashboard/writings/settings/seo';
import WritingSettingsGeneral from '@/components/dashboard/writings/settings/general';
import WritingSettingsComments from '@/components/dashboard/writings/settings/comments';
import WritingSettingsAside from '@/components/dashboard/writings/common/writing-settings-aside';

interface Props {
  params: { id: string };
}

const WritingSettingsPage = async ({ params }: Props) => {
  const article: any = {};
  return (
    <DashboardSidebarLayout allowNavbar>
      <Tabs
        defaultValue='general'
        className='max-w-[1400px] mx-auto w-full flex items-start'
      >
        <section className='flex items-start gap-5'>
          <WritingSettingsAside />
          <div>
            <div className='sticky top-0 bg-neutral-900 w-full border-b p-2 text-gray-400 border-zinc-700/40 inline-flex items-center justify-between'>
              <p className='text-lg font-medium text-gray-300'>
                Article Settings
              </p>
            </div>
            <TabsContent value='general'>
              <WritingSettingsGeneral article={article} />
            </TabsContent>
            <TabsContent value='seo'>
              <WritingSettingsSEO />
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
