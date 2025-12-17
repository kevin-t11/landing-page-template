import scriptAnimation from '@/lottie/script.json';
import Lottie from 'lottie-react';
import { Eye } from 'lucide-react';
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
    <div className='w-full h-50 bg-white rounded-xl border border-gray-200 md:p-4 p-3 shadow-sm shadow-sky-100/50 flex flex-col relative overflow-hidden'>
      <div className='flex items-center justify-between md:mb-3 mb-2 z-10 bg-white/90 backdrop-blur-sm md:pb-2 pb-1.5 border-b border-gray-50'>
        <div className='flex items-center md:gap-1 gap-0.5'>
          <div className='md:size-6 size-5'>
            <Lottie
              animationData={scriptAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
          <span className='md:text-xs text-[10px] font-bold text-gray-700 uppercase tracking-wider'>
            Script
          </span>
        </div>
        <div className='flex items-center gap-1.5'>
          <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-red-400' />
          <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-yellow-400' />
          <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-green-400' />
        </div>
      </div>

      <div className='flex-1 relative overflow-hidden'>
        <motion.div
          className='md:space-y-2.5 space-y-2'
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
              className='flex md:gap-2 gap-1.5 items-center'
            >
              <div className='md:w-4 w-3 text-[9px] text-gray-300 font-mono text-right'>
                {i + 1}
              </div>
              <div className='flex-1 md:h-2 h-1.5 bg-gray-100 rounded-sm overflow-hidden relative'>
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
        <div className='absolute bottom-0 left-0 w-full md:h-8 h-6 bg-linear-to-t from-white to-transparent pointer-events-none' />
      </div>

      {visibleLines >= 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className='absolute md:bottom-16 bottom-24 md:right-4 right-3 z-20'
        >
          <div className='bg-sky-500 text-white text-[10px] font-bold md:px-3 px-2 md:py-1.5 py-1 rounded-full shadow-lg shadow-sky-500/30 flex items-center gap-1'>
            <span>
              <Eye className='md:size-4 size-3' />
            </span>
            <span>Preview</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};
