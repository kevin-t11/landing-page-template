'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useMemo, useState } from 'react';

export const HookStyle = () => {
  const hooks = [
    {
      name: 'John Doe',
      username: '@johndoe',
      hook1: 'Wait till the end',
      hook2: 'This is actually insane',
      avatar: '/avatar_1.avif',
    },
    {
      name: 'Sandy Koshti',
      username: '@sandykoshti',
      hook1: "You won't believe what happened",
      hook2: 'I was today years old',
      avatar: '/avatar_2.avif',
    },
    {
      name: 'Aman Mishra',
      username: '@amanmishra',
      hook1: 'This changed my life forever',
      hook2: 'Nobody talks about this',
      avatar: '/avatar_3.avif',
    },
  ];
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const transforms = useMemo(() => {
    if (open) {
      return [
        'translateX(-78px) translateY(-10px) rotate(-14deg) scale(0.93)',
        'translateY(-48px) scale(1.05)',
        'translateX(78px) translateY(-10px) rotate(14deg) scale(0.93)',
      ];
    }

    if (hovered) {
      return [
        'translateX(-28px) translateY(-10px) rotate(-8deg) scale(0.97)',
        'translateY(-18px) scale(1.015)',
        'translateX(28px) translateY(-10px) rotate(8deg) scale(0.97)',
      ];
    }

    return [
      'translateX(-14px) translateY(-8px) rotate(-4deg)',
      'translateY(-10px) scale(1.005)',
      'translateX(14px) translateY(-8px) rotate(4deg)',
    ];
  }, [hovered, open]);

  const layerBase =
    'absolute inset-x-4 bottom-2 h-36 rounded-xl border border-sky-100/10 bg-linear-to-b from-sky-100/70 to-sky-100/40 shadow-lg shadow-sky-500/20 backdrop-blur-sm transition-all duration-500';

  return (
    <div className='z-10 p-10 relative flex items-center justify-center'>
      <div
        className='group relative w-60 h-48 select-none'
        style={{ perspective: 1000 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className='absolute -bottom-6 left-8 right-8 h-4 bg-sky-500/40 blur-3xl rounded-full transition-all duration-500 group-hover:scale-105' />

        <div
          className='relative w-full h-full cursor-pointer rounded-3xl border border-sky-100 bg-linear-to-b from-sky-600 to-sky-500 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1'
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className='absolute inset-0 rounded-3xl bg-linear-to-tr from-sky-900/70 via-sky-100 to-transparent opacity-30' />

          <div
            className='absolute inset-x-5 top-4 bottom-3'
            style={{ transformStyle: 'preserve-3d' }}
          >
            {hooks.map((hook, i) => (
              <div
                key={hook.name}
                className={layerBase}
                style={{
                  transform: transforms[i],
                  zIndex: i + 1,
                  transformOrigin: 'center bottom',
                }}
              >
                <div className='flex h-full flex-col justify-between rounded-lg bg-white p-4 text-neutral-900 backdrop-blur-sm'>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={hook.avatar}
                      alt={hook.name}
                      width={32}
                      height={32}
                      className='h-8 w-8 rounded-full object-cover'
                    />
                    <div>
                      <p className='text-sm font-medium'>{hook.name}</p>
                      <p className='text-xs text-neutral-500'>
                        {hook.username}
                      </p>
                    </div>
                  </div>
                  <p className='text-xs font-medium'>⬩ {hook.hook1}</p>
                  <p className='text-xs font-medium'>⬩ {hook.hook2}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={cn(
              'absolute inset-x-3 bottom-3 h-[75%] bg-linear-to-b from-sky-900/90 to-sky-500/60 shadow-inner shadow-sky-500/40 transition-transform duration-500 rounded-[18px]',
              !open && 'backdrop-blur-sm opacity-90'
            )}
            style={{
              transformStyle: 'preserve-3d',
              transform: open
                ? 'translateZ(32px) rotateX(-36deg)'
                : 'translateZ(8px) rotateX(-14deg)',
              transformOrigin: 'center bottom',
              zIndex: 40,
            }}
          />
        </div>
      </div>
    </div>
  );
};
