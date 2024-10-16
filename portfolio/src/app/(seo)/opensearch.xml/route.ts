import { domainURL } from '@/lib/utils/helpers';
import { NextResponse } from 'next/server';

export async function GET(_request: Request) {
  const openSearchXml = `  
  <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/" xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>rockyessel</ShortName>
  <Description>Search rockyessel</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">${domainURL('/favicon.ico')}</Image>
  <Url type="text/html" method="get" template="${domainURL('/topics/q?q={searchTerms}&ref=opensearch')}"/>
  <moz:SearchForm>${domainURL('/topics/q')}</moz:SearchForm>
</OpenSearchDescription>
`;

  return new NextResponse(openSearchXml.trim(), {
    headers: { 'Content-Type': 'application/opensearchdescription+xml' },
  });
}
