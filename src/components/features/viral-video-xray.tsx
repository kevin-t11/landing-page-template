'use client';

import { cn } from '@/lib/utils';
import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';

export const ViralVideoXRay = () => {
  const progress = useMotionValue(0);
  const y = useTransform(progress, [0, 1], ['-50%', '49%']);
  const scaleY = useTransform(progress, [0, 0.5, 1], [1, 1.05, 1]);
  const inputOpacity = useTransform(progress, [0, 1], [0, 1]);
  const outputOpacity = useTransform(progress, [0, 1], [1, 0]);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    });

    return () => controls.stop();
  }, [progress]);

  return (
    <div className='mt-4 relative h-full overflow-hidden rounded-lg'>
      <div className='absolute inset-0'>
        <motion.div
          className='absolute inset-0 z-0'
          initial={{ opacity: 1 }}
          style={{ opacity: outputOpacity }}
        >
          <Image
            src='/input_video_xray.svg'
            alt='Viral Video X-Ray output'
            fill
            sizes='100vw'
            className='object-cover scale-110 blur-[2px]'
            draggable={false}
          />
        </motion.div>
        <motion.div
          className='absolute inset-0 z-0'
          initial={{ opacity: 0 }}
          style={{ opacity: inputOpacity }}
        >
          <Image
            src='/output_video_xray.svg'
            alt='Viral Video X-Ray input'
            fill
            sizes='100vw'
            className='object-cover scale-110'
            draggable={false}
          />
        </motion.div>
      </div>

      <motion.div
        className='absolute inset-0 pointer-events-none z-10'
        aria-hidden
        style={{ y, scaleY }}
      >
        <div className='h-1 w-[90%] mx-auto absolute inset-x-0 top-30 bg-sky-600/90 rounded-full shadow-[0_0_30px_rgba(14,165,233,0.35)]' />
        <div
          className={cn(
            'absolute inset-x-0 top-31 h-40 bg-linear-to-b from-sky-300 via-sky-100/50 to-transparent',
            'mask-l-from-50% mask-r-from-50%'
          )}
        />
      </motion.div>
    </div>
  );
};
