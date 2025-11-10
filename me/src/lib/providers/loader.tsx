'use client';

import { isProduction } from '../utils/helpers';
import { Next13ProgressBar } from 'next13-progressbar';
import { Next13ProgressBar as Local } from '../../../node_modules/next13-progressbar/dist';

export const NavbarProgressProvider = () => {
  const NextProgressLoader = isProduction ? Next13ProgressBar : Local;

  return (
    <NextProgressLoader
      height='2px'
      color='#84cc16'
      options={{ showSpinner: true }}
      showOnShallow
    />
  );
};
