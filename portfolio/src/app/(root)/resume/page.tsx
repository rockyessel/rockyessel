


import { getPageSEO } from '@/lib/actions/helpers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageSEO('resume');
}


const ResumePage = async() => {
  return (
    <div>ResumePage</div>
  )
}

export default ResumePage