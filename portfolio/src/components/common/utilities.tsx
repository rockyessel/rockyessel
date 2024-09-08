'use client';

import { cn } from '@/lib/utils/helpers';

interface ISkeleton {
  className?: string;
}

export const Skeleton = ({ className }: ISkeleton) => (
  <div
    className={cn(
      className,
      'flex flex-1 w-full h-full min-h-[6rem] rounded-xl'
    )}
  ></div>
);
