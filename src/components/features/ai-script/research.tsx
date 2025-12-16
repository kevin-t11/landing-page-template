import researchAnimation from '@/lottie/research.json';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';

export const ResearchSkeleton = () => {
  return (
    <div className='flex-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-1'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className='w-7 h-7'
          >
            <Lottie
              animationData={researchAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>

          <span className='text-sm font-semibold text-gray-900 mt-1'>
            Research
          </span>
        </div>

        <div className='flex items-center gap-1.5'>
          <div className='w-2.5 h-2.5 rounded-full bg-red-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-green-400' />
        </div>
      </div>

      <div className='space-y-2.5 bg-gray-50 dark:bg-gray-950 rounded-lg p-4 mb-4'>
        {[100, 88, 72, 95, 64].map((width, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
            className='h-2 rounded-full bg-gray-200 dark:bg-gray-800 relative overflow-hidden'
            style={{ width: `${width}%` }}
          >
            <motion.div
              className='absolute inset-0 bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent'
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
