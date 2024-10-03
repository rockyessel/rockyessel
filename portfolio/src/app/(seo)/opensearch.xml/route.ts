import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const host = request.headers.get("host");
  const openSearchXml = `
<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>My Site</ShortName>
  <Description>Search My Site</Description>
  <Url type="text/html" template="https://${host}/search?q={searchTerms}"/>
  <Image width="16" height="16" type="image/x-icon">https://${host}/favicon.ico</Image>
</OpenSearchDescription>
`;

  return new NextResponse(openSearchXml.trim(), {
    headers: { "Content-Type": "application/opensearchdescription+xml" },
  });
}
