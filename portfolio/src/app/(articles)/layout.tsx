import RootLayout from '@/components/layout/root';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const DynamicArticleLayout = ({ children }: Props) => {
  return <RootLayout>{children}</RootLayout>;
};

export default DynamicArticleLayout;
