import SignIinButton from '@/components/actions/sign-in';
import { getServerUser } from '@/lib/actions/helpers';
import { Fragment } from 'react';

const DashboardRootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerUser();

  return session ? (
    children
  ) : (
    <Fragment>
      Hello, You have to sign in <SignIinButton />
    </Fragment>
  );
};
export default DashboardRootLayout;
