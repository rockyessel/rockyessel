'use client';

import { cn } from '@/lib/utils/helpers';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import React from 'react';

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

interface PortalProps {
  children: ReactNode;
}

export const ClientPortal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(typeof document === 'object');
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};
