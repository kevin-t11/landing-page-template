import { cn } from '@/lib/utils';
import hookAnimation from '@/lottie/hook.json';
import Lottie from 'lottie-react';
import { MousePointer2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const HookSkeleton = () => {
  const [selectedHook, setSelectedHook] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedHook(1);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const hooks = [
    { score: 88, label: 'Wait for it...' },
    { score: 98, label: "You won't believe this" },
    { score: 92, label: "Here's the truth" },
  ];

  return (
    <div className='w-full h-50 bg-white rounded-xl border border-gray-200 p-4 shadow-sm shadow-sky-100/50 relative overflow-hidden flex flex-col'>
      <div className='flex items-center justify-between mb-3 px-1'>
        <div className='flex items-center gap-2 mb-2'>
          <div className='size-6'>
            <Lottie animationData={hookAnimation} loop={true} autoplay={true} />
          </div>
          <span className='text-xs font-bold text-gray-700 uppercase tracking-wider'>
            Select Hook
          </span>
        </div>

        <div className='flex items-center gap-1.5'>
          <div className='w-2.5 h-2.5 rounded-full bg-red-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-green-400' />
        </div>
      </div>
      <div className='flex-1 flex gap-3 items-center pb-14'>
        {hooks.map((hook, idx) => {
          const isSelected = selectedHook === idx;
          const isDimmed = selectedHook !== null && !isSelected;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isDimmed ? 0.4 : 1,
                scale: isSelected ? 1.05 : isDimmed ? 0.95 : 1,
                y: isSelected ? -2 : 0,
              }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                'flex-1 h-20 rounded-lg border flex flex-col items-center justify-center gap-1 relative overflow-hidden transition-colors duration-300 cursor-pointer',
                isSelected
                  ? 'bg-sky-50 border-sky-400 shadow-md shadow-sky-100'
                  : 'bg-white border-gray-100'
              )}
            >
              {isSelected && (
                <motion.div
                  layoutId='outline'
                  className='absolute inset-0 border-2 border-sky-400 rounded-lg'
                />
              )}

              <div
                className={cn(
                  'text-2xl font-black',
                  isSelected ? 'text-sky-600' : 'text-gray-300'
                )}
              >
                {hook.score}
              </div>
              <div className='text-[10px] font-medium text-gray-400 uppercase'>
                {hook.label}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cursor Animation */}
      <motion.div
        className='absolute z-20 pointer-events-none'
        initial={{ top: '120%', left: '100%' }}
        animate={{
          top: ['110%', '60%', '60%'],
          left: ['100%', '50%', '50%'],
        }}
        transition={{ duration: 1.5, times: [0, 0.7, 1] }}
      >
        <MousePointer2
          className='fill-black text-white drop-shadow-md'
          size={24}
        />
        <motion.div
          className='absolute -top-3 -left-3 w-12 h-12 rounded-full bg-sky-400/30'
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 0] }}
          transition={{ delay: 1.5, duration: 0.4 }}
        />
      </motion.div>
    </div>
  );
};
