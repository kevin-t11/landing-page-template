'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { SVGProps, useState } from 'react';

export const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <HeroTitle />
      <HeroDescription />
      <div className='mt-6 flex items-center justify-center gap-4'>
        <HeroCTAButton />
        <HeroWatchDemoButton />
      </div>
    </div>
  );
};

export const HeroTitle = () => {
  return (
    <h1 className='text-6xl font-bold text-center tracking-tighter max-w-xl mx-auto font-sans'>
      <span className='flex items-center gap-1 ml-6'>
        Stop <HeroCloseIcon className='inline-block size-16' /> Guessing.{' '}
        <br />{' '}
      </span>
      <span className='flex items-center gap-2 tracking-tighter'>
        Start Going{' '}
        <span className='bg-linear-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent inline-flex items-center gap-1'>
          Viral <HeroCTAIcon className='inline-block size-20' />
        </span>
      </span>
    </h1>
  );
};

export const HeroDescription = () => {
  return (
    <p className='text-lg text-center text-muted-foreground max-w-3xl mx-auto font-medium mt-4'>
      Save <span className='font-bold'>+15 hours</span> weekly. Discover winning
      content, analyze data-driven insights, and rewrite scripts with AI in
      seconds.
    </p>
  );
};

export const HeroCTAIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.92561 12.8242H5.67654C4.74945 12.8242 4 13.5737 4 14.5007V16.4049C4 17.332 4.74945 18.0814 5.67654 18.0814H6.92561C7.85269 18.0814 8.60215 17.332 8.60215 16.4049V14.5007C8.60215 13.5737 7.85269 12.8242 6.92561 12.8242Z'
        fill='url(#paint0_linear_103_1773)'
      />
      <path
        d='M12.3485 8.32727H11.0994C10.1723 8.32727 9.42285 9.07671 9.42285 10.0038V16.4046C9.42285 17.3317 10.1723 18.0811 11.0994 18.0811H12.3485C13.2755 18.0811 14.025 17.3317 14.025 16.4046V10.0038C14.025 9.07671 13.2755 8.32727 12.3485 8.32727Z'
        fill='url(#paint1_linear_103_1773)'
      />
      <path
        d='M17.7723 5.23108H16.5232C15.5961 5.23108 14.8467 5.98052 14.8467 6.90761V16.4061C14.8467 17.3332 15.5961 18.0826 16.5232 18.0826H17.7723C18.6993 18.0826 19.4488 17.3332 19.4488 16.4061V6.90761C19.4488 5.98052 18.6993 5.23108 17.7723 5.23108Z'
        fill='url(#paint2_linear_103_1773)'
      />
      <foreignObject x='2.80268' y='2.46881' width='10.256' height='10.256'>
        <div
          style={{
            backdropFilter: 'blur(0.72px)',
            clipPath: 'url(#bgblur_0_103_1773_clip_path)',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius='1.43072'>
        <mask id='path-4-inside-1_103_1773' fill='white'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.93065 11.294C9.97258 11.294 11.6279 9.63871 11.6279 7.59678C11.6279 5.55485 9.97258 3.89954 7.93065 3.89954C5.88872 3.89954 4.2334 5.55485 4.2334 7.59678C4.2334 9.63871 5.88872 11.294 7.93065 11.294ZM9.26345 8.48937C9.12467 8.48937 9.00808 8.37278 9.00808 8.234V6.68448L6.35731 9.33527C6.30734 9.37969 6.24071 9.40744 6.17409 9.40744C6.10748 9.40744 6.04643 9.38524 5.99646 9.33527C5.89654 9.23535 5.89654 9.07436 5.99646 8.97443L8.54664 6.42424H7.3149C7.17612 6.42424 7.05953 6.30766 7.05953 6.16887C7.05953 6.03009 7.17612 5.91351 7.3149 5.91351H9.26345C9.40224 5.91351 9.51883 6.03009 9.51883 6.16887V8.234C9.51883 8.37278 9.40224 8.48937 9.26345 8.48937Z'
          />
        </mask>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M7.93065 11.294C9.97258 11.294 11.6279 9.63871 11.6279 7.59678C11.6279 5.55485 9.97258 3.89954 7.93065 3.89954C5.88872 3.89954 4.2334 5.55485 4.2334 7.59678C4.2334 9.63871 5.88872 11.294 7.93065 11.294ZM9.26345 8.48937C9.12467 8.48937 9.00808 8.37278 9.00808 8.234V6.68448L6.35731 9.33527C6.30734 9.37969 6.24071 9.40744 6.17409 9.40744C6.10748 9.40744 6.04643 9.38524 5.99646 9.33527C5.89654 9.23535 5.89654 9.07436 5.99646 8.97443L8.54664 6.42424H7.3149C7.17612 6.42424 7.05953 6.30766 7.05953 6.16887C7.05953 6.03009 7.17612 5.91351 7.3149 5.91351H9.26345C9.40224 5.91351 9.51883 6.03009 9.51883 6.16887V8.234C9.51883 8.37278 9.40224 8.48937 9.26345 8.48937Z'
          fill='white'
          fillOpacity='0.3'
        />
        <path
          d='M9.00808 6.68448H9.20808V6.20163L8.86666 6.54306L9.00808 6.68448ZM6.35731 9.33527L6.49041 9.48501L6.49873 9.4767L6.35731 9.33527ZM5.99646 9.33527L5.85504 9.4767L5.85504 9.4767L5.99646 9.33527ZM5.99646 8.97443L6.13789 9.11585L6.13789 9.11585L5.99646 8.97443ZM8.54664 6.42424L8.68806 6.56566L9.02948 6.22424H8.54664V6.42424ZM11.4279 7.59678C11.4279 9.52826 9.86212 11.094 7.93065 11.094V11.494C10.083 11.494 11.8279 9.74917 11.8279 7.59678H11.4279ZM7.93065 4.09954C9.86212 4.09954 11.4279 5.66531 11.4279 7.59678H11.8279C11.8279 5.44439 10.083 3.69954 7.93065 3.69954V4.09954ZM4.4334 7.59678C4.4334 5.66531 5.99917 4.09954 7.93065 4.09954V3.69954C5.77826 3.69954 4.0334 5.44439 4.0334 7.59678H4.4334ZM7.93065 11.094C5.99917 11.094 4.4334 9.52826 4.4334 7.59678H4.0334C4.0334 9.74917 5.77826 11.494 7.93065 11.494V11.094ZM8.80808 8.234C8.80808 8.48324 9.01422 8.68937 9.26345 8.68937V8.28937C9.25096 8.28937 9.23695 8.28411 9.22515 8.2723C9.21334 8.2605 9.20808 8.24649 9.20808 8.234H8.80808ZM8.80808 6.68448V8.234H9.20808V6.68448H8.80808ZM8.86666 6.54306L6.21588 9.19385L6.49873 9.4767L9.14951 6.8259L8.86666 6.54306ZM6.22443 9.18579C6.20735 9.20098 6.18695 9.20744 6.17409 9.20744V9.60744C6.29447 9.60744 6.40734 9.55839 6.49018 9.48476L6.22443 9.18579ZM6.17409 9.20744C6.16322 9.20744 6.15657 9.20569 6.15257 9.2041C6.14886 9.20264 6.14405 9.20002 6.13788 9.19385L5.85504 9.4767C5.94575 9.5674 6.05919 9.60744 6.17409 9.60744V9.20744ZM6.13789 9.19385C6.11606 9.17203 6.11606 9.13767 6.13789 9.11585L5.85504 8.83301C5.67701 9.01104 5.67701 9.29867 5.85504 9.4767L6.13789 9.19385ZM6.13789 9.11585L8.68806 6.56566L8.40522 6.28282L5.85504 8.83301L6.13789 9.11585ZM7.3149 6.62424H8.54664V6.22424H7.3149V6.62424ZM6.85953 6.16887C6.85953 6.41812 7.06567 6.62424 7.3149 6.62424V6.22424C7.3024 6.22424 7.28839 6.21898 7.27659 6.20718C7.26479 6.19538 7.25953 6.18137 7.25953 6.16887H6.85953ZM7.3149 5.71351C7.06566 5.71351 6.85953 5.91963 6.85953 6.16887H7.25953C7.25953 6.15638 7.26479 6.14237 7.27659 6.13057C7.2884 6.11877 7.30241 6.11351 7.3149 6.11351V5.71351ZM9.26345 5.71351H7.3149V6.11351H9.26345V5.71351ZM9.71883 6.16887C9.71883 5.91963 9.51269 5.71351 9.26345 5.71351V6.11351C9.27595 6.11351 9.28996 6.11877 9.30176 6.13057C9.31357 6.14237 9.31883 6.15638 9.31883 6.16887H9.71883ZM9.71883 8.234V6.16887H9.31883V8.234H9.71883ZM9.26345 8.68937C9.51269 8.68937 9.71883 8.48324 9.71883 8.234H9.31883C9.31883 8.24649 9.31357 8.2605 9.30176 8.2723C9.28996 8.28411 9.27595 8.28937 9.26345 8.28937V8.68937Z'
          fill='#0EA5E9'
          mask='url(#path-4-inside-1_103_1773)'
        />
      </g>
      <defs>
        <clipPath
          id='bgblur_0_103_1773_clip_path'
          transform='translate(-2.80268 -2.46881)'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.93065 11.294C9.97258 11.294 11.6279 9.63871 11.6279 7.59678C11.6279 5.55485 9.97258 3.89954 7.93065 3.89954C5.88872 3.89954 4.2334 5.55485 4.2334 7.59678C4.2334 9.63871 5.88872 11.294 7.93065 11.294ZM9.26345 8.48937C9.12467 8.48937 9.00808 8.37278 9.00808 8.234V6.68448L6.35731 9.33527C6.30734 9.37969 6.24071 9.40744 6.17409 9.40744C6.10748 9.40744 6.04643 9.38524 5.99646 9.33527C5.89654 9.23535 5.89654 9.07436 5.99646 8.97443L8.54664 6.42424H7.3149C7.17612 6.42424 7.05953 6.30766 7.05953 6.16887C7.05953 6.03009 7.17612 5.91351 7.3149 5.91351H9.26345C9.40224 5.91351 9.51883 6.03009 9.51883 6.16887V8.234C9.51883 8.37278 9.40224 8.48937 9.26345 8.48937Z'
          />
        </clipPath>
        <linearGradient
          id='paint0_linear_103_1773'
          x1='6.30107'
          y1='12.8242'
          x2='6.30107'
          y2='18.0814'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0EA5E9' />
          <stop offset='1' stopColor='#0284C7' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_103_1773'
          x1='11.7239'
          y1='8.32727'
          x2='11.7239'
          y2='18.0811'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0EA5E9' />
          <stop offset='1' stopColor='#0284C7' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_103_1773'
          x1='17.1477'
          y1='5.23108'
          x2='17.1477'
          y2='18.0826'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0EA5E9' />
          <stop offset='1' stopColor='#0284C7' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const HeroCloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 24 24'
      fill='none'
      data-src='https://cdn.hugeicons.com/icons/cancel-circle-bulk-rounded.svg?v=1.0.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      color='#d0021b'
      {...props}
    >
      <path
        opacity='0.4'
        d='M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25Z'
        fill='#d0021b'
      ></path>
      <path
        d='M14.3692 8.22436C14.7619 7.90402 15.3409 7.92663 15.707 8.29272C16.0732 8.65883 16.0958 9.23783 15.7754 9.63061L15.707 9.70678L13.4131 11.9997L15.7061 14.2927L15.7754 14.3689C16.0955 14.7617 16.0721 15.3408 15.7061 15.7068C15.3399 16.0728 14.7609 16.0956 14.3682 15.7751L14.292 15.7068L12 13.4138L9.70802 15.7068C9.31756 16.0973 8.68451 16.0972 8.29396 15.7068C7.90341 15.3163 7.90345 14.6833 8.29396 14.2927L10.5859 11.9997L8.29298 9.70678L8.22462 9.63061C7.90427 9.23783 7.92687 8.65883 8.29298 8.29272C8.6591 7.92663 9.23811 7.90402 9.63087 8.22436L9.70704 8.29272L12 10.5857L14.293 8.29272L14.3692 8.22436Z'
        fill='#d0021b'
      ></path>
    </svg>
  );
};

const HeroCTAButton = () => {
  return (
    <button
      className={cn(
        // Base layout and positioning
        'relative inline-flex items-center justify-center overflow-hidden',
        // Size and spacing
        'rounded-[12px] px-[18px] py-3 min-h-[48px] min-w-[102px]',
        // Border and outline
        'border-none outline-none',
        // Cursor and transitions
        'cursor-pointer transition-all duration-250 ease-in-out',
        // Background gradient
        'bg-[radial-gradient(65.28%_65.28%_at_50%_100%,rgba(56,189,248,0.8)_0%,rgba(56,189,248,0)_100%),linear-gradient(0deg,#0284c7,#0284c7)]',
        // Active state
        'active:scale-95',
        // Ring styles
        'ring-2 ring-sky-500/30 ring-offset-0',
        // Before pseudo-element (inner highlight)
        "before:content-[''] before:absolute before:inset-px before:z-0",
        'before:transition-all before:duration-500 before:ease-in-out',
        'before:rounded-[11px]',
        'before:bg-[linear-gradient(177.95deg,rgba(255,255,255,0.19)_0%,rgba(255,255,255,0)_100%)]',
        // After pseudo-element (inner border)
        "after:content-[''] after:absolute after:inset-[2px] after:z-0",
        'after:transition-all after:duration-500 after:ease-in-out',
        'after:rounded-[10px] after:ring-1 after:ring-sky-200/10 after:ring-inset',
        // Hover states
        'hover:[&_svg]:translate-x-0.5 hover:[&_svg_path]:animate-[dash_0.8s_linear_forwards]'
      )}
    >
      <div
        className={cn(
          'absolute inset-0 overflow-hidden pointer-events-none z-10'
        )}
      >
        <span
          className={cn(
            'absolute bottom-[-10px] left-[10%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-100 pointer-events-none',
            'animate-[floating-points_2.35s_ease-in-out_infinite_0.2s]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[30%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-70 pointer-events-none',
            'animate-[floating-points_2.5s_ease-in-out_infinite_0.5s]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[25%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-80 pointer-events-none',
            'animate-[floating-points_2.2s_ease-in-out_infinite_0.1s]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[44%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-60 pointer-events-none',
            'animate-[floating-points_2.05s_ease-in-out_infinite]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[50%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-100 pointer-events-none',
            'animate-[floating-points_1.9s_ease-in-out_infinite]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[75%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-50 pointer-events-none',
            'animate-[floating-points_1.5s_ease-in-out_infinite_1.5s]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[88%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-90 pointer-events-none',
            'animate-[floating-points_2.2s_ease-in-out_infinite_0.2s]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[58%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-80 pointer-events-none',
            'animate-[floating-points_2.25s_ease-in-out_infinite_0.2s]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[98%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-60 pointer-events-none',
            'animate-[floating-points_2.6s_ease-in-out_infinite_0.1s]'
          )}
        />
        <span
          className={cn(
            'absolute bottom-[-10px] left-[65%] w-0.5 h-0.5 bg-white rounded-full',
            'opacity-100 pointer-events-none',
            'animate-[floating-points_2.5s_ease-in-out_infinite_0.2s]'
          )}
        />
      </div>
      <span
        className={cn(
          'relative z-10 inline-flex items-center justify-center w-full gap-1.5',
          'text-white text-base font-medium leading-6',
          'transition-colors duration-200 ease-in-out'
        )}
      >
        Try for free
        <svg
          className={cn(
            'w-[18px] h-[18px] transition-transform duration-300 ease-in-out',
            'stroke-white fill-none'
          )}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
        >
          <path d='M5 12h14' />
          <path d='m12 5 7 7-7 7' />
        </svg>
      </span>
    </button>
  );
};

const HeroWatchDemoButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-md px-[17px] py-[12px] tracking-tight font-semibold transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] text-white/80 hover:text-white',
        'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]',
        'bg-[radial-gradient(ellipse_at_bottom,rgba(71,81,92,1)_0%,rgba(0,0,0,1)_100%)]'
      )}
    >
      <motion.div
        className='mr-2'
        initial={{ opacity: 0, x: -8, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -8,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <HeroPlayIcon className='size-4' isHovered={isHovered} />
      </motion.div>
      <motion.span
        className={cn('relative z-10 font-medium')}
        animate={{
          x: isHovered ? 0 : -8,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}
      >
        Watch demo
      </motion.span>

      <span
        aria-hidden='true'
        className={cn(
          'absolute bottom-0 left-1/2 h-1 w-[70%] -translate-x-1/2 opacity-20 transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80',
          'bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_100%)]'
        )}
      ></span>
    </button>
  );
};

interface HeroPlayIconProps extends SVGProps<SVGSVGElement> {
  isHovered?: boolean;
}

const HeroPlayIcon = ({ isHovered = false, ...props }: HeroPlayIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <motion.path
        d='M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isHovered ? 1 : 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
        style={{ fill: 'none' }}
      />
    </svg>
  );
};
