import JsonLDPage from '@/components/common/json-ld-page';
import { getJsonLd, getPageSEO, pageSEO } from '@/lib/actions/helpers';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageSEO('resume');
}

const ResumePage = async () => {
  const seoDetails = pageSEO['resume'];
  const jsonLd = getJsonLd(seoDetails, 'resume');

  return (
    <Fragment>
      <JsonLDPage jsonLd={jsonLd} />
      <div>ResumePage</div>
    </Fragment>
  );
};

export default ResumePage;
