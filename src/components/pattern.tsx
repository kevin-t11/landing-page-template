'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export const BackgroundPattern = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('relative flex h-screen', className)}>
      <div
        className={cn(
          'absolute inset-0 w-full',
          'bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_0px,var(--color-sky-50)_0px,var(--color-sky-100)_15px)] md:bg-[repeating-linear-gradient(90deg,transparent_0px,transparent_0px,var(--color-sky-50)_0px,var(--color-sky-100)_25px)]',
          // 'mask-[radial-gradient(circle,black_40%,black_60%,transparent_100%)]',
          'mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent),linear-gradient(to_bottom,transparent,black_40%,white_0%,transparent)] md:mask-[linear-gradient(to_right,transparent,black_0%,black_100%,transparent),linear-gradient(to_bottom,transparent,black_60%,white_0%,transparent)]',
          'mask-intersect'
        )}
      />
      {/* Content */}
      <div className='relative z-10 w-full'>{children}</div>
    </div>
  );
};
