import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '40to7ztv',
  dataset: 'production',
  apiVersion: `2022-12-25`, // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
