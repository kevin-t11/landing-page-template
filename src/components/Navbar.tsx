'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'WhyViewCount', href: '#why-viewcount' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];
  return (
    <div className='relative'>
      <nav className='sticky top-4 mt-4 md:max-w-5xl mx-auto max-w-sm rounded-full z-50 bg-background/80 backdrop-blur-sm border border-border/50'>
        <div className='flex item-center justify-between p-4 md:px-6'>
          <div>
            <Logo
              onClick={() => router.push('/')}
              className='size-8 md:size-10'
            />
          </div>
          <div className='hidden md:flex items-center justify-center space-x-4 text-gray-900'>
            {navItems.map((item) => (
              <Link
                className='text-sm font-medium text-foreground hover:text-primary'
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className='hidden md:flex gap-2 items-center'>
            <Button variant='outline' size='lg' className='rounded-full'>
              <Link href='/login'>Login</Link>
            </Button>
            <Button variant='skeuomorphic'>
              <Link href='/signup'>
                <span>Sign Up</span>
              </Link>
            </Button>
          </div>

          <div className='md:hidden flex items-center justify-center'>
            {isMenuOpen ? (
              <button
                className='active:scale-95 active:rorate-45 transition-all duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                <XIcon className='size-6' />
              </button>
            ) : (
              <button
                className='active:scale-95 active:rorate-45 transition-all duration-300'
                onClick={() => setIsMenuOpen(true)}
              >
                <MenuIcon className='size-6' />
              </button>
            )}
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='md:hidden absolute left-1/2 -translate-x-1/2 mt-2 w-full max-w-sm px-4 z-40'>
          <div className='flex flex-col items-start justify-center gap-2 px-4 py-4 w-full rounded-2xl border border-border/60 bg-background/95 shadow-lg backdrop-blur'>
            {navItems.map((item, index) => (
              <AnimatePresence mode='wait' key={item.label}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className='font-medium text-neutral-800 hover:text-primary border-b border-neutral-200/60 last:border-b-0 px-2 py-2 w-full text-left'
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.div>
              </AnimatePresence>
            ))}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className='flex items-center justify-center gap-4 w-full mt-2'
            >
              <Button
                variant='outline'
                size='lg'
                className='rounded-full flex-1 items-center justify-center'
              >
                <Link href='/login'>Login</Link>
              </Button>
              <Button
                variant='skeuomorphic'
                className='flex-1 items-center justify-center'
              >
                <Link href='/signup'>
                  <span>Sign Up</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M24 0H16V12.0632C15.9663 14.2434 14.1885 16 12.0005 16H0V24H8.68629C10.808 24 12.8429 23.1571 14.3431 21.6569L21.6569 14.3431C23.1571 12.8429 24 10.808 24 8.68629V0Z'
        fill='url(#paint0_linear_7697_8782)'
      ></path>
      <path
        d='M16 40H24V27.9368C24.0337 25.7566 25.8115 24 27.9995 24H40V16H31.3137C29.192 16 27.1571 16.8429 25.6569 18.3431L18.3431 25.6569C16.8429 27.1571 16 29.192 16 31.3137V40Z'
        fill='url(#paint1_linear_7697_8782)'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_7697_8782'
          x1='20'
          y1='-0.997096'
          x2='20'
          y2='33.7931'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#75D8FC'></stop>
          <stop offset='1' stopColor='#0072E5'></stop>
        </linearGradient>
        <linearGradient
          id='paint1_linear_7697_8782'
          x1='20'
          y1='-0.997096'
          x2='20'
          y2='33.7931'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#75D8FC'></stop>
          <stop offset='1' stopColor='#0072E5'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
