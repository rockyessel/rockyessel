import PublicationLists from '@/components/dashboard/publications/lists';
import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';
import { IPublication } from '@/types';

const PublicationPage = async () => {
  return (
    <DashboardSidebarLayout allowNavbar>
      <PublicationLists publications={examplePublications} />
    </DashboardSidebarLayout>
  );
};

export default PublicationPage;

const examplePublications: IPublication[] = [
  {
    id: '1',
    name: 'Tech Insights',
    url: 'techinsights.com',
    logo: '/placeholder.svg',
    description: 'Latest news and analysis in the world of technology.',
    keywords: ['technology', 'innovation', 'gadgets'],
  },
  {
    id: '2',
    name: 'Health & Wellness Today',
    url: 'healthwellnesstoday.com',
    logo: '/placeholder.svg',
    description: 'Your daily dose of health tips and wellness advice.',
    keywords: ['health', 'wellness', 'fitness'],
  },
  {
    id: '3',
    name: 'Global Economics Review',
    url: 'globaleconomicsreview.com',
    logo: '/placeholder.svg',
    description: 'In-depth analysis of global economic trends and policies.',
    keywords: ['economics', 'finance', 'global markets'],
  },
];
