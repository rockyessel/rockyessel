import Component from '@/components/common/archives-table';
import JsonLDPage from '@/components/common/json-ld-page';
import AsideContentLayout from '@/components/layout/aside-content';
import { getJsonLd, getPageSEO, pageSEO } from '@/lib/actions/helpers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageSEO('archives');
}

const ArchivesPage = async () => {
  const seoDetails = pageSEO['projects'];
  const jsonLd = getJsonLd(seoDetails, 'projects');

  return (
    <AsideContentLayout>
      <JsonLDPage jsonLd={jsonLd} />
      <Component />
    </AsideContentLayout>
  );
};

export default ArchivesPage;
