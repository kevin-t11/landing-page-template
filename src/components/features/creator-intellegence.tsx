'use client';

import { InstaReelIcon, TiktokBrandIcon, YTShortsIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';

export const CreatorIntellegence = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className='relative w-full h-full left-6'
    >
      <div className='relative z-10 px-4'>
        <PodiumStage />
      </div>
    </motion.div>
  );
};

export const PodiumStage = () => {
  return (
    <div className='relative w-full flex items-end justify-center gap-4'>
      <PodiumBlock height='h-24' delay={0.2}>
        <Avatar src='/avatar_1.avif' alt='User 1' icon={<YTShortsIcon />} />
        <div className='mb-8'>
          <Avatar src='/avatar_2.avif' alt='User 2' icon={<InstaReelIcon />} />
        </div>
      </PodiumBlock>

      <PodiumBlock height='h-24' delay={0.1}>
        <Avatar
          src='/avatar_3.avif'
          alt='User 3'
          icon={<TiktokBrandIcon className='size-4' />}
        />
        <div className='mb-8'>
          <Avatar src='/avatar_4.avif' alt='User 4' icon={<YTShortsIcon />} />
        </div>
      </PodiumBlock>

      <PodiumBlock height='h-44' delay={0} isCenter>
        <div className='mb-2'>
          <Avatar
            src='/avatar_5.avif'
            alt='Sandy'
            isMain
            icon={<TiktokBrandIcon className='size-4' />}
          />
        </div>
      </PodiumBlock>

      <PodiumBlock height='h-20' delay={0.2}>
        <div className='mb-4'>
          <Avatar src='/avatar_6.avif' alt='User 6' icon={<InstaReelIcon />} />
        </div>
        <Avatar src='/avatar_7.avif' alt='User 7' icon={<TiktokBrandIcon />} />
      </PodiumBlock>
    </div>
  );
};

interface PodiumProps {
  height: string;
  delay?: number;
  children: React.ReactNode;
  isCenter?: boolean;
  halfWidth?: boolean;
}

export const PodiumBlock = ({
  height,
  delay = 0,
  children,
  isCenter = false,
  halfWidth = false,
}: PodiumProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-end',
        isCenter ? 'z-10 min-w-[140px]' : 'min-w-[90px]'
      )}
    >
      {/* Avatars */}
      <div className='w-full flex justify-center items-end gap-3 pb-1'>
        {children}
      </div>

      {/* Observer Wrapper */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        className={cn(halfWidth ? 'w-1/2' : 'w-full', height)}
      >
        {/* Animated Bar */}
        <motion.div
          variants={{
            hidden: { scaleY: 0, opacity: 0 },
            visible: { scaleY: 1, opacity: 1 },
          }}
          transition={{
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: 'bottom' }}
          className={cn(
            'relative rounded-t-[20px] backdrop-blur-md overflow-hidden',
            isCenter ? 'h-[180px]' : 'h-[90px]',
            isCenter
              ? 'bg-linear-to-b from-sky-400/70 via-sky-200/50 to-white shadow-[0_-10px_40px_-15px_rgba(251,146,60,0.25)]'
              : 'bg-linear-to-b from-sky-200/70 via-sky-100/30 to-sky-50/5 opacity-80'
          )}
        >
          {/* Top Highlight */}
          <div className='absolute top-0 inset-x-0 h-px bg-white/80' />
          <div className='absolute top-0 inset-x-4 h-6 bg-white/30 blur-lg rounded-full' />

          {/* Center Badge */}
          {isCenter && (
            <motion.div
              className='absolute top-8 left-0 right-0 flex justify-center'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: delay + 0.2,
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className='bg-sky-50/90 border border-sky-200/50 px-2 py-1 rounded-full shadow-sm backdrop-blur-sm'>
                <span className='text-[10px] font-bold text-sky-950 uppercase tracking-wide flex items-center gap-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    data-src='https://cdn.hugeicons.com/icons/fire-bulk-rounded.svg?v=1.0.1'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    role='img'
                    color='#00bcff'
                    className='size-5'
                  >
                    <path
                      d='M15.9077 16.466C16.0351 15.0932 15.6021 13.5377 13.9394 11.8828C13.9515 13.6439 13.2691 15.1105 12.5817 15.9492C12.3983 16.1729 12.1015 16.2714 11.8197 16.2019C11.5379 16.1324 11.3217 15.9075 11.2648 15.6245C10.99 14.2588 10.2094 13.6572 9.37798 13.2336C9.32162 14.3973 8.81097 15.2349 8.43933 15.8445L8.43933 15.8445C8.33436 16.0167 8.24048 16.1707 8.17106 16.3087C7.06532 18.507 8.40414 20.1024 9.33044 21.2063C10.0736 21.9384 11.1891 22.4498 11.9342 22.75C14.3598 21.619 15.7145 18.5473 15.9077 16.466Z'
                      fill='#00bcff'
                    ></path>
                    <path
                      opacity='0.4'
                      d='M10.6456 1.30244C10.8632 1.21696 11.1087 1.23679 11.3094 1.35606C15.5753 3.89182 19.5158 8.22204 20.8067 12.3962C21.4574 14.5006 21.4551 16.6438 20.3707 18.4821C19.287 20.319 17.2107 21.7018 14.0349 22.472C12.0944 22.9426 9.642 22.7336 8.70576 22.4469C5.84185 21.3945 3.81629 19.4233 3.06629 17.0181C2.31167 14.598 2.89019 11.8717 4.97016 9.41957C5.63741 8.63294 6.22041 7.98045 6.73375 7.40592C8.53955 5.38487 9.48338 4.32854 10.2004 1.79173C10.2634 1.5689 10.4281 1.38791 10.6456 1.30244Z'
                      fill='#00bcff'
                    ></path>
                  </svg>
                  Rising Star
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

interface AvatarProps {
  src: string;
  alt: string;
  isMain?: boolean;
  barHeight?: number;
  barDelay?: number;
  icon?: React.ReactNode;
  iconClassName?: string;
}

const Avatar = ({
  src,
  alt,
  isMain = false,
  barHeight = 90,
  barDelay = 0,
  icon = <InstaReelIcon />,
  iconClassName = 'size-5',
}: AvatarProps) => {
  return (
    <motion.div
      className='relative flex flex-col items-center z-20'
      initial={{ opacity: 0, y: barHeight }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.5, delay: barDelay },
        y: {
          duration: 0.2,
          delay: barDelay,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      {/* Main Avatar */}
      <motion.div
        animate={isMain ? { y: [-4, 4, -4] } : { y: 0 }}
        transition={
          isMain
            ? {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
              }
            : undefined
        }
        className='relative'
      >
        <div
          className={cn(
            'relative rounded-full border-[3px] border-white shadow-md overflow-hidden bg-gray-100',
            isMain ? 'w-14 h-14 ring-2 ring-sky-300/80' : 'w-11 h-11'
          )}
        >
          <Image
            src={src}
            alt={alt}
            width={48}
            height={48}
            className='w-full h-full object-cover'
          />
        </div>

        <BrandIcon
          className={cn(
            'absolute -bottom-1 right-1 rounded-full bg-accent p-px ring-1 ring-white',
            isMain ? 'size-5' : 'size-4'
          )}
          icon={icon}
        />
      </motion.div>
      {/* Main User Tag (Floating Popup) */}
      {isMain && (
        <motion.div
          className='absolute left-[90%] bottom-[90%] bg-white/95 backdrop-blur shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border border-white/50 pl-1 pr-3 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap z-50 transform'
          initial={{ scale: 0.8, opacity: 0, x: -10 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <div className='w-5 h-5 rounded-full overflow-hidden shrink-0 ring-1 ring-gray-100'>
            <Image
              src={src}
              alt={alt}
              width={20}
              height={20}
              className='size-full object-cover'
            />
          </div>

          <span className='text-[11px] font-semibold text-gray-700 tracking-tight'>
            @sandykoshti
          </span>

          {/* Notification Dot with Ping */}
          <div className='absolute -top-1 -right-1'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white shadow-sm'></span>
            </span>
          </div>
        </motion.div>
      )}
      {/* Stem */}
      <div className='w-[1.5px] h-5 bg-linear-to-b from-gray-300 via-gray-300/50 to-transparent -mt-px' />
    </motion.div>
  );
};

const BrandIcon = ({
  className,
  icon = <InstaReelIcon />,
}: {
  className: string;
  icon: React.ReactNode;
}) => {
  return <div className={cn('flex items-center', className)}>{icon}</div>;
};

// 'use client';

// import { InstagramIcon, TiktokIcon, YoutubeIcon } from '@/icons';
// import { cn } from '@/lib/utils';
// import { motion } from 'motion/react';
// import Image from 'next/image';
// import { SVGProps } from 'react';
// import { Logo } from '../Navbar';

// export const CreatorIntelligence = () => {
//   const items = [
//     {
//       icon: <YoutubeIcon className='size-6' />,
//       title: 'Youtube',
//     },
//     {
//       icon: <InstagramIcon className='size-6' />,
//       title: 'Instagram',
//     },
//     {
//       icon: <TiktokIcon className='size-6' />,
//       title: 'Tiktok',
//     },
//   ];
//   return (
//     <div>
//       <ul className='flex flex-col items-start gap-12 mt-2 list-none'>
//         {items.map((item) => (
//           <ListItem key={item.title} icon={item.icon} title={item.title} />
//         ))}
//       </ul>
//       <div className='relative'>
//         <InputSVGLines className='absolute bottom-4 left-24' />
//       </div>
//       <AnimatedBox>
//         <Logo className='size-10' />
//       </AnimatedBox>
//       <div className='relative'>
//         <OutputSVGLines className='absolute bottom-16 left-70' />
//       </div>
//       <div className='relative'>
//         <AnimatedAvatar
//           src='/avatar_1.avif'
//           className='absolute bottom-8.5 left-109 size-12'
//           animationType='vertical'
//           delay={2}
//         />
//         <AnimatedAvatar
//           src='/avatar_2.avif'
//           className='absolute bottom-26 left-118 size-12'
//           animationType='horizontal'
//           delay={2.5}
//         />
//         <AnimatedAvatar
//           src='/avatar_3.avif'
//           className='absolute bottom-47 left-123 size-12'
//           animationType='vertical'
//           delay={3}
//         />
//         <AnimatedAvatar
//           src='/avatar_4.avif'
//           className='absolute bottom-63 left-110 size-12'
//           animationType='horizontal'
//           delay={3.5}
//         />
//       </div>
//     </div>
//   );
// };

// const ListItem = ({
//   icon,
//   title,
//   className,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   className?: string;
// }) => {
//   return (
//     <li className='flex items-center gap-1 rounded-lg border border-border/80 bg-white p-1.5'>
//       {icon}
//       <span className={cn('text-sm font-semibold', className)}>{title}</span>
//     </li>
//   );
// };

// const InputSVGLines = (props: SVGProps<SVGSVGElement>) => {
//   return (
//     <svg
//       width='230'
//       height='173'
//       viewBox='0 0 230 173'
//       fill='none'
//       xmlns='http://www.w3.org/2000/svg'
//       {...props}
//     >
//       <defs>
//         {/** Masks for each path */}
//         <mask id='line-1-mask'>
//           <path d='M 9 0.5 H 200' stroke='white' strokeWidth='2' />
//         </mask>
//         <mask id='line-2-mask'>
//           <path d='M 23 86.5 L 200 86.5' stroke='white' strokeWidth='2' />
//         </mask>
//         <mask id='line-3-mask'>
//           <path d='M 0 172.5 H 200' stroke='white' strokeWidth='2' />
//         </mask>
//         <mask id='line-4-mask'>
//           <path d='M 200 1 L 200 87' stroke='white' strokeWidth='2' />
//         </mask>
//         <mask id='line-5-mask'>
//           <path d='M 200 173 L 200 87' stroke='white' strokeWidth='2' />
//         </mask>
//       </defs>

//       <path d='M 9 0.5 H 200' stroke='#E5E7EB' strokeWidth='2' />
//       <path d='M 23 86.5 L 200 86.5' stroke='#E5E7EB' strokeWidth='2' />
//       <path d='M 0 172.5 H 200' stroke='#E5E7EB' strokeWidth='2' />
//       <path d='M 200 1 L 200 87' stroke='#E5E7EB' strokeWidth='2' />
//       <path d='M 200 173 L 200 87' stroke='#E5E7EB' strokeWidth='2' />

//       {/* Red horizontal line (middle) */}
//       <motion.circle
//         cx={23}
//         cy={86.5}
//         r='10'
//         fill='#F44336'
//         mask='url(#line-2-mask)'
//         initial={{ cx: 23, opacity: 1 }}
//         animate={{
//           cx: 200,
//           opacity: [1, 1, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'linear',
//           times: [0, 0.8, 1],
//         }}
//       />

//       {/* Pink horizontal line (bottom) */}
//       <motion.circle
//         cx={0}
//         cy={172.5}
//         r='10'
//         fill='#EC4899'
//         mask='url(#line-3-mask)'
//         initial={{ cx: 0, opacity: 1 }}
//         animate={{
//           cx: 200,
//           opacity: [1, 1, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'linear',
//           delay: 0.1,
//           repeatDelay: 1.5,
//           times: [0, 0.8, 1],
//         }}
//       />
//       {/* Pink vertical line - continues after horizontal */}
//       <motion.circle
//         cx={200}
//         cy={173}
//         r='10'
//         fill='#EC4899'
//         mask='url(#line-5-mask)'
//         initial={{ cy: 173, opacity: 0 }}
//         animate={{
//           cy: 87,
//           opacity: [0, 1, 1, 0],
//         }}
//         transition={{
//           duration: 1.5,
//           repeat: Infinity,
//           ease: 'linear',
//           delay: 2.1,
//           repeatDelay: 2,
//           times: [0, 0.1, 0.8, 1],
//         }}
//       />

//       {/* Black horizontal line (top) */}
//       <motion.circle
//         cx={9}
//         cy={0.5}
//         r='10'
//         fill='#282828'
//         mask='url(#line-1-mask)'
//         initial={{ cx: 9, opacity: 1 }}
//         animate={{
//           cx: 200,
//           opacity: [1, 1, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'linear',
//           delay: 0.2,
//           repeatDelay: 1.5,
//           times: [0, 0.8, 1],
//         }}
//       />
//       {/* Black vertical line - continues after horizontal */}
//       <motion.circle
//         cx={200}
//         cy={1}
//         r='10'
//         fill='#282828'
//         mask='url(#line-4-mask)'
//         initial={{ cy: 1, opacity: 0 }}
//         animate={{
//           cy: 87,
//           opacity: [0, 1, 1, 0],
//         }}
//         transition={{
//           duration: 1.5,
//           repeat: Infinity,
//           ease: 'linear',
//           delay: 2.2,
//           repeatDelay: 2,
//           times: [0, 0.1, 0.8, 1],
//         }}
//       />
//     </svg>
//   );
// };

// const AnimatedBox = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className='relative bottom-35.5 left-64 z-20 size-20 overflow-hidden p-0.5 bg-white rounded-sm'>
//       <div className='flex flex-col items-center justify-center size-full relative z-20 bg-white rounded-[10px]'>
//         {children}
//       </div>
//       <div
//         className={cn(
//           'absolute inset-0',
//           'bg-[conic-gradient(at_center,transparent,#5B9EFF,transparent_20%)]',
//           'animate-[spin_2s_linear_infinite]',
//           'scale-130'
//         )}
//       />
//       <div
//         className={cn(
//           'absolute inset-0',
//           'bg-[conic-gradient(at_center,transparent,#F44336,transparent_20%)]',
//           'animate-[spin_2s_linear_infinite]',
//           'scale-130',
//           '[animation-delay:1s]'
//         )}
//       />
//     </div>
//   );
// };

// const OutputSVGLines = (props: SVGProps<SVGSVGElement>) => {
//   // Primary sky color
//   const primaryColor = '#5B9EFF';

//   return (
//     <svg
//       width='215'
//       height='201'
//       viewBox='0 0 215 201'
//       fill='none'
//       xmlns='http://www.w3.org/2000/svg'
//       {...props}
//     >
//       <defs>
//         <mask id='output-line-1-mask'>
//           <path
//             d='M5.94872 73.9547L166.493 0.488144'
//             stroke='white'
//             strokeWidth='2'
//           />
//         </mask>
//         <mask id='output-line-2-mask'>
//           <line
//             x1='0.285829'
//             y1='84.5298'
//             x2='166.779'
//             y2='200.53'
//             stroke='white'
//             strokeWidth='2'
//           />
//         </mask>
//         <mask id='output-line-3-mask'>
//           <line
//             x1='8.12425'
//             y1='84.4557'
//             x2='208.657'
//             y2='135.903'
//             stroke='white'
//             strokeWidth='2'
//           />
//         </mask>
//         <mask id='output-line-4-mask'>
//           <line
//             x1='5.94204'
//             y1='80.4434'
//             x2='214.942'
//             y2='56.0501'
//             stroke='white'
//             strokeWidth='2'
//           />
//         </mask>
//       </defs>

//       {/* Base lines */}
//       <path
//         d='M5.94872 73.9547L166.493 0.488144'
//         stroke='#E5E7EB'
//         strokeWidth='2'
//       />
//       <line
//         x1='0.285829'
//         y1='84.5298'
//         x2='166.779'
//         y2='200.53'
//         stroke='#E5E7EB'
//         strokeWidth='2'
//       />
//       <line
//         x1='8.12425'
//         y1='84.4557'
//         x2='208.657'
//         y2='135.903'
//         stroke='#E5E7EB'
//         strokeWidth='2'
//       />
//       <line
//         x1='5.94204'
//         y1='80.4434'
//         x2='214.942'
//         y2='56.0501'
//         stroke='#E5E7EB'
//         strokeWidth='2'
//       />

//       {/* Animated circles - all with primary sky color - staggered animation */}
//       {/* Line 1 - diagonal path */}
//       <motion.circle
//         cx={5.94872}
//         cy={73.9547}
//         r='10'
//         fill={primaryColor}
//         mask='url(#output-line-1-mask)'
//         initial={{ cx: 5.94872, cy: 73.9547, opacity: 1 }}
//         animate={{
//           cx: 166.493,
//           cy: 0.488144,
//           opacity: [1, 1, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'linear',
//           repeatDelay: 1.5,
//           times: [0, 0.8, 1],
//         }}
//       />

//       {/* Line 2 - starts after Line 1 */}
//       <motion.circle
//         cx={0.285829}
//         cy={84.5298}
//         r='10'
//         fill={primaryColor}
//         mask='url(#output-line-2-mask)'
//         initial={{ cx: 0.285829, cy: 84.5298, opacity: 1 }}
//         animate={{
//           cx: 166.779,
//           cy: 200.53,
//           opacity: [1, 1, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'linear',
//           delay: 0.5,
//           repeatDelay: 1.5,
//           times: [0, 0.8, 1],
//         }}
//       />

//       {/* Line 3 - starts after Line 2 */}
//       <motion.circle
//         cx={8.12425}
//         cy={84.4557}
//         r='10'
//         fill={primaryColor}
//         mask='url(#output-line-3-mask)'
//         initial={{ cx: 8.12425, cy: 84.4557, opacity: 1 }}
//         animate={{
//           cx: 208.657,
//           cy: 135.903,
//           opacity: [1, 1, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'linear',
//           delay: 1,
//           repeatDelay: 1.5,
//           times: [0, 0.8, 1],
//         }}
//       />

//       {/* Line 4 - starts after Line 3 */}
//       <motion.circle
//         cx={5.94204}
//         cy={80.4434}
//         r='10'
//         fill={primaryColor}
//         mask='url(#output-line-4-mask)'
//         initial={{ cx: 5.94204, cy: 80.4434, opacity: 1 }}
//         animate={{
//           cx: 214.942,
//           cy: 56.0501,
//           opacity: [1, 1, 0],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: 'linear',
//           delay: 1.5,
//           repeatDelay: 1.5,
//           times: [0, 0.8, 1],
//         }}
//       />
//     </svg>
//   );
// };

// const AnimatedAvatar = ({
//   src,
//   className,
//   animationType = 'vertical',
//   delay = 0,
// }: {
//   src: string;
//   className?: string;
//   animationType?: 'vertical' | 'horizontal';
//   delay?: number;
// }) => {
//   const verticalAnimation = {
//     y: [0, -8, 0],
//   };

//   const horizontalAnimation = {
//     x: [0, 8, 0],
//   };

//   return (
//     <motion.div
//       initial={{ y: 0, x: 0 }}
//       animate={
//         animationType === 'vertical' ? verticalAnimation : horizontalAnimation
//       }
//       transition={{
//         duration: 2,
//         repeat: Infinity,
//         ease: 'easeInOut',
//         delay: delay,
//         repeatDelay: 0.5,
//       }}
//     >
//       <Image
//         src={src}
//         alt='Avatar'
//         width={100}
//         height={100}
//         className={cn('size-full object-cover rounded-full', className)}
//       />
//     </motion.div>
//   );
// };
