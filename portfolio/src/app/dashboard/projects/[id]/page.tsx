import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';
import ProjectEditorForm from '@/components/project/editor';

const ProjectEditPage = () => {
  return (
    <DashboardSidebarLayout allowNavbar>
      <ProjectEditorForm />
    </DashboardSidebarLayout>
  );
};

export default ProjectEditPage;
