import PublicationLists from '@/components/dashboard/publications/lists';
import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';
import { getPublications } from '@/lib/actions/convex_/publications';

const PublicationPage = async () => {

  const publications = await getPublications();




  return (
    <DashboardSidebarLayout allowNavbar>
      <PublicationLists publications={publications} />
    </DashboardSidebarLayout>
  );
};

export default PublicationPage;
