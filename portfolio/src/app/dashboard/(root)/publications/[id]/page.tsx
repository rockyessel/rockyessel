import PublicationArticleTable from '@/components/dashboard/publications/table';
import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';
import React from 'react';
import { Id } from '../../../../../../convex/_generated/dataModel';
import {
  getArticleByPubId,
  getPublicationById,
} from '@/lib/actions/convex_/publications';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: Id<'publications'> };
}

const PublicationIdPage = async ({ params }: Props) => {
  const publication = await getPublicationById(params.id);

  if (!publication) return notFound();

  const articles = (await getArticleByPubId(publication._id)) || [];

  return (
    <DashboardSidebarLayout allowNavbar>
      <PublicationArticleTable publication={publication} articles={articles} />
    </DashboardSidebarLayout>
  );
};

export default PublicationIdPage;
