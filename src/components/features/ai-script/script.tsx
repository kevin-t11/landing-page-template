import scriptAnimation from '@/lottie/script.json';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const ScriptSkeleton = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [lineWidths] = useState(() =>
    [...Array(6)].map(() => Math.floor(Math.random() * 40) + 50)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => Math.min(prev + 1, 6));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-50 bg-white rounded-xl border border-gray-200 p-4 shadow-sm shadow-sky-100/50 flex flex-col relative overflow-hidden'>
      <div className='flex items-center justify-between mb-3 z-10 bg-white/90 backdrop-blur-sm pb-2 border-b border-gray-50'>
        <div className='flex items-center gap-1'>
          <div className='size-6'>
            <Lottie
              animationData={scriptAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
          <span className='text-xs font-bold text-gray-700 uppercase tracking-wider'>
            Script
          </span>
        </div>
        <div className='flex items-center gap-1.5'>
          <div className='w-2.5 h-2.5 rounded-full bg-red-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-green-400' />
        </div>
      </div>

      <div className='flex-1 relative overflow-hidden'>
        <motion.div
          className='space-y-2.5'
          animate={{ y: visibleLines > 3 ? -(visibleLines - 3) * 20 : 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: visibleLines > i ? 1 : 0,
                x: visibleLines > i ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
              className='flex gap-2 items-center'
            >
              <div className='w-4 text-[9px] text-gray-300 font-mono text-right'>
                {i + 1}
              </div>
              <div className='flex-1 h-2 bg-gray-100 rounded-sm overflow-hidden relative'>
                {visibleLines > i && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${lineWidths[i]}%` }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='h-full bg-gray-600/10'
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fade overlay at bottom */}
        <div className='absolute bottom-0 left-0 w-full h-8 bg-linear-to-t from-white to-transparent pointer-events-none' />
      </div>

      {visibleLines >= 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className='absolute bottom-14 right-4 z-20'
        >
          <div className='bg-sky-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg shadow-sky-500/30 flex items-center gap-1'>
            <span>Done</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
