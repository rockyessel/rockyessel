import Component from '@/components/common/archives-table';
import AsideContentLayout from '@/components/layout/aside-content';
import { getPageSEO } from '@/lib/actions/helpers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageSEO('archives');
}

const ArchivesPage = async () => {
  return (
    <AsideContentLayout>
      <Component />
    </AsideContentLayout>
  );
};

export default ArchivesPage;
