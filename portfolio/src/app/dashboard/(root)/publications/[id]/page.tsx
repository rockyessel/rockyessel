import PublicationArticleTable from '@/components/dashboard/publications/table';
import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';
import React from 'react';

const PublicationIdPage = () => {
  return (
    <DashboardSidebarLayout allowNavbar>
      <PublicationArticleTable
        publication={examplePublication} />
    </DashboardSidebarLayout>
  );
};

export default PublicationIdPage;

const examplePublication:any = {
  id: '1',
  name: 'Tech Insights',
  description: 'Latest news and analysis in the world of technology.',
  logo: '/placeholder.svg',
  articles: [
    {
      id: '1',
      title: 'The Future of AI',
      url: 'https://techinsights.com/future-of-ai',
      description: 'Exploring the potential impacts of artificial intelligence on various industries.',
      coverImage: '/placeholder.svg',
      tags: ['AI', 'Technology', 'Future']
    },
    {
      id: '2',
      title: '5G Revolution',
      url: 'https://techinsights.com/5g-revolution',
      description: 'How 5G is changing the landscape of mobile communications and beyond.',
      coverImage: '/placeholder.svg',
      tags: ['5G', 'Mobile', 'Communications']
    },
  ]
}
