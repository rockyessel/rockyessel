import DashboardSidebarLayout from '@/components/layout/sidebar';

const DashboardRootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return <DashboardSidebarLayout>{children}</DashboardSidebarLayout>;
};

export default DashboardRootLayout;