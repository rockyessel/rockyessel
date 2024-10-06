import DashboardProjectCard from '@/components/common/project-card-dashboard';
import DashboardSidebarLayout from '@/components/layout/sidebar-dashboard';

const ProjectsPage = () => {
  return (
    <DashboardSidebarLayout>
      <div className='w-full grid grid-cols-3 gap-4'>
        {Array.from({ length: 40 }).map((_, index) => (
          <DashboardProjectCard
            key={index}
            title='RE Portfolio Web App'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit temporibus repellendus impedit, non tempora dicta, sequi delectus possimus obcaecati aspernatur praesentium, magnam fuga animi provident dignissimos commodi molestias quam ipsum?'
            category='Pinned'
            priority='Medium'
            assignees={[
              { name: 'John Doe', image: '/path/to/image1.jpg' },
              { name: 'Jane Smith', image: '/path/to/image2.jpg' },
            ]}
            comments={23}
            attachments={12}
          />
        ))}
      </div>
    </DashboardSidebarLayout>
  );
};

export default ProjectsPage;
