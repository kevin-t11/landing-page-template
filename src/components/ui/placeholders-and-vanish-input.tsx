'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
}: {
  placeholders: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (placeholders.length === 0) return;

    const startAnimation = () => {
      intervalRef.current = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 3000);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible' && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else if (document.visibilityState === 'visible') {
        startAnimation();
      }
    };

    startAnimation();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [placeholders]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      className={cn(
        'w-full relative bg-white dark:bg-zinc-800 h-12 rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 transition duration-200',
        value && 'bg-gray-50 dark:bg-zinc-900'
      )}
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
        value={value}
        type='text'
        className='w-full h-full px-4 text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black rounded-md focus:outline-none focus:ring-0'
      />

      <div className='absolute inset-0 flex items-center rounded-md pointer-events-none'>
        <AnimatePresence mode='wait'>
          {!value && (
            <motion.p
              key={`placeholder-${currentPlaceholder}`}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              className='dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 text-left w-full truncate'
            >
              {placeholders[currentPlaceholder]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
