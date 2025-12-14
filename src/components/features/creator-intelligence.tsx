'use client';

import { InstagramIcon, TiktokIcon, YoutubeIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import { SVGProps } from 'react';
import { Logo } from '../Navbar';

export const CreatorIntelligence = () => {
  const items = [
    {
      icon: <YoutubeIcon className='size-6' />,
      title: 'Youtube',
    },
    {
      icon: <InstagramIcon className='size-6' />,
      title: 'Instagram',
    },
    {
      icon: <TiktokIcon className='size-6' />,
      title: 'Tiktok',
    },
  ];
  return (
    <div>
      <ul className='flex flex-col items-start gap-12 mt-2 list-none'>
        {items.map((item) => (
          <ListItem key={item.title} icon={item.icon} title={item.title} />
        ))}
      </ul>
      <div className='relative'>
        <InputSVGLines className='absolute bottom-4 left-24' />
      </div>
      <AnimatedBox>
        <Logo className='size-10' />
      </AnimatedBox>
      <div className='relative'>
        <OutputSVGLines className='absolute bottom-16 left-70' />
      </div>
      <div className='relative'>
        <AnimatedAvatar
          src='/avatar_1.avif'
          className='absolute bottom-8.5 left-109 size-12'
          animationType='vertical'
          delay={2}
        />
        <AnimatedAvatar
          src='/avatar_2.avif'
          className='absolute bottom-26 left-118 size-12'
          animationType='horizontal'
          delay={2.5}
        />
        <AnimatedAvatar
          src='/avatar_3.avif'
          className='absolute bottom-47 left-123 size-12'
          animationType='vertical'
          delay={3}
        />
        <AnimatedAvatar
          src='/avatar_4.avif'
          className='absolute bottom-63 left-110 size-12'
          animationType='horizontal'
          delay={3.5}
        />
      </div>
    </div>
  );
};

const ListItem = ({
  icon,
  title,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <li className='flex items-center gap-1 rounded-lg border border-border/80 bg-white p-1.5'>
      {icon}
      <span className={cn('text-sm font-semibold', className)}>{title}</span>
    </li>
  );
};

const InputSVGLines = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='230'
      height='173'
      viewBox='0 0 230 173'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        {/** Masks for each path */}
        <mask id='line-1-mask'>
          <path d='M 9 0.5 H 200' stroke='white' strokeWidth='2' />
        </mask>
        <mask id='line-2-mask'>
          <path d='M 23 86.5 L 200 86.5' stroke='white' strokeWidth='2' />
        </mask>
        <mask id='line-3-mask'>
          <path d='M 0 172.5 H 200' stroke='white' strokeWidth='2' />
        </mask>
        <mask id='line-4-mask'>
          <path d='M 200 1 L 200 87' stroke='white' strokeWidth='2' />
        </mask>
        <mask id='line-5-mask'>
          <path d='M 200 173 L 200 87' stroke='white' strokeWidth='2' />
        </mask>
      </defs>

      <path d='M 9 0.5 H 200' stroke='#E5E7EB' strokeWidth='2' />
      <path d='M 23 86.5 L 200 86.5' stroke='#E5E7EB' strokeWidth='2' />
      <path d='M 0 172.5 H 200' stroke='#E5E7EB' strokeWidth='2' />
      <path d='M 200 1 L 200 87' stroke='#E5E7EB' strokeWidth='2' />
      <path d='M 200 173 L 200 87' stroke='#E5E7EB' strokeWidth='2' />

      {/* Red horizontal line (middle) */}
      <motion.circle
        cx={23}
        cy={86.5}
        r='10'
        fill='#F44336'
        mask='url(#line-2-mask)'
        initial={{ cx: 23, opacity: 1 }}
        animate={{
          cx: 200,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          times: [0, 0.8, 1],
        }}
      />

      {/* Pink horizontal line (bottom) */}
      <motion.circle
        cx={0}
        cy={172.5}
        r='10'
        fill='#EC4899'
        mask='url(#line-3-mask)'
        initial={{ cx: 0, opacity: 1 }}
        animate={{
          cx: 200,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.1,
          repeatDelay: 1.5,
          times: [0, 0.8, 1],
        }}
      />
      {/* Pink vertical line - continues after horizontal */}
      <motion.circle
        cx={200}
        cy={173}
        r='10'
        fill='#EC4899'
        mask='url(#line-5-mask)'
        initial={{ cy: 173, opacity: 0 }}
        animate={{
          cy: 87,
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
          delay: 2.1,
          repeatDelay: 2,
          times: [0, 0.1, 0.8, 1],
        }}
      />

      {/* Black horizontal line (top) */}
      <motion.circle
        cx={9}
        cy={0.5}
        r='10'
        fill='#282828'
        mask='url(#line-1-mask)'
        initial={{ cx: 9, opacity: 1 }}
        animate={{
          cx: 200,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.2,
          repeatDelay: 1.5,
          times: [0, 0.8, 1],
        }}
      />
      {/* Black vertical line - continues after horizontal */}
      <motion.circle
        cx={200}
        cy={1}
        r='10'
        fill='#282828'
        mask='url(#line-4-mask)'
        initial={{ cy: 1, opacity: 0 }}
        animate={{
          cy: 87,
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
          delay: 2.2,
          repeatDelay: 2,
          times: [0, 0.1, 0.8, 1],
        }}
      />
    </svg>
  );
};

const AnimatedBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative bottom-35.5 left-64 z-20 size-20 overflow-hidden p-0.5 bg-white rounded-sm'>
      <div className='flex flex-col items-center justify-center size-full relative z-20 bg-white rounded-[10px]'>
        {children}
      </div>
      <div
        className={cn(
          'absolute inset-0',
          'bg-[conic-gradient(at_center,transparent,#5B9EFF,transparent_20%)]',
          'animate-[spin_2s_linear_infinite]',
          'scale-130'
        )}
      />
      <div
        className={cn(
          'absolute inset-0',
          'bg-[conic-gradient(at_center,transparent,#F44336,transparent_20%)]',
          'animate-[spin_2s_linear_infinite]',
          'scale-130',
          '[animation-delay:1s]'
        )}
      />
    </div>
  );
};

const OutputSVGLines = (props: SVGProps<SVGSVGElement>) => {
  // Primary sky color
  const primaryColor = '#5B9EFF';

  return (
    <svg
      width='215'
      height='201'
      viewBox='0 0 215 201'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <mask id='output-line-1-mask'>
          <path
            d='M5.94872 73.9547L166.493 0.488144'
            stroke='white'
            strokeWidth='2'
          />
        </mask>
        <mask id='output-line-2-mask'>
          <line
            x1='0.285829'
            y1='84.5298'
            x2='166.779'
            y2='200.53'
            stroke='white'
            strokeWidth='2'
          />
        </mask>
        <mask id='output-line-3-mask'>
          <line
            x1='8.12425'
            y1='84.4557'
            x2='208.657'
            y2='135.903'
            stroke='white'
            strokeWidth='2'
          />
        </mask>
        <mask id='output-line-4-mask'>
          <line
            x1='5.94204'
            y1='80.4434'
            x2='214.942'
            y2='56.0501'
            stroke='white'
            strokeWidth='2'
          />
        </mask>
      </defs>

      {/* Base lines */}
      <path
        d='M5.94872 73.9547L166.493 0.488144'
        stroke='#E5E7EB'
        strokeWidth='2'
      />
      <line
        x1='0.285829'
        y1='84.5298'
        x2='166.779'
        y2='200.53'
        stroke='#E5E7EB'
        strokeWidth='2'
      />
      <line
        x1='8.12425'
        y1='84.4557'
        x2='208.657'
        y2='135.903'
        stroke='#E5E7EB'
        strokeWidth='2'
      />
      <line
        x1='5.94204'
        y1='80.4434'
        x2='214.942'
        y2='56.0501'
        stroke='#E5E7EB'
        strokeWidth='2'
      />

      {/* Animated circles - all with primary sky color - staggered animation */}
      {/* Line 1 - diagonal path */}
      <motion.circle
        cx={5.94872}
        cy={73.9547}
        r='10'
        fill={primaryColor}
        mask='url(#output-line-1-mask)'
        initial={{ cx: 5.94872, cy: 73.9547, opacity: 1 }}
        animate={{
          cx: 166.493,
          cy: 0.488144,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 1.5,
          times: [0, 0.8, 1],
        }}
      />

      {/* Line 2 - starts after Line 1 */}
      <motion.circle
        cx={0.285829}
        cy={84.5298}
        r='10'
        fill={primaryColor}
        mask='url(#output-line-2-mask)'
        initial={{ cx: 0.285829, cy: 84.5298, opacity: 1 }}
        animate={{
          cx: 166.779,
          cy: 200.53,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.5,
          repeatDelay: 1.5,
          times: [0, 0.8, 1],
        }}
      />

      {/* Line 3 - starts after Line 2 */}
      <motion.circle
        cx={8.12425}
        cy={84.4557}
        r='10'
        fill={primaryColor}
        mask='url(#output-line-3-mask)'
        initial={{ cx: 8.12425, cy: 84.4557, opacity: 1 }}
        animate={{
          cx: 208.657,
          cy: 135.903,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          delay: 1,
          repeatDelay: 1.5,
          times: [0, 0.8, 1],
        }}
      />

      {/* Line 4 - starts after Line 3 */}
      <motion.circle
        cx={5.94204}
        cy={80.4434}
        r='10'
        fill={primaryColor}
        mask='url(#output-line-4-mask)'
        initial={{ cx: 5.94204, cy: 80.4434, opacity: 1 }}
        animate={{
          cx: 214.942,
          cy: 56.0501,
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          delay: 1.5,
          repeatDelay: 1.5,
          times: [0, 0.8, 1],
        }}
      />
    </svg>
  );
};

const AnimatedAvatar = ({
  src,
  className,
  animationType = 'vertical',
  delay = 0,
}: {
  src: string;
  className?: string;
  animationType?: 'vertical' | 'horizontal';
  delay?: number;
}) => {
  const verticalAnimation = {
    y: [0, -8, 0],
  };

  const horizontalAnimation = {
    x: [0, 8, 0],
  };

  return (
    <motion.div
      initial={{ y: 0, x: 0 }}
      animate={
        animationType === 'vertical' ? verticalAnimation : horizontalAnimation
      }
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
        repeatDelay: 0.5,
      }}
    >
      <Image
        src={src}
        alt='Avatar'
        width={100}
        height={100}
        className={cn('size-full object-cover rounded-full', className)}
      />
    </motion.div>
  );
};
