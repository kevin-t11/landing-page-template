import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { GenerateIcon } from '@/icons';
import lightbulbAnimation from '@/lottie/lightbulb.json';
import Lottie from 'lottie-react';
import { motion } from 'motion/react';

export const TopicSkeleton = () => {
  return (
    <div className='flex-1 bg-white  rounded-2xl h-50 border border-gray-200 p-4 shadow-sm'>
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-1'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className='w-7 h-7'
          >
            <Lottie
              animationData={lightbulbAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>

          <span className='text-sm font-semibold text-gray-900 mt-1'>
            Topic
          </span>
        </div>

        <div className='flex items-center gap-1.5'>
          <div className='w-2.5 h-2.5 rounded-full bg-red-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-green-400' />
        </div>
      </div>

      <label htmlFor='topic' className='text-sm font-medium text-gray-900 ml-2'>
        Throw your thoughts here
      </label>

      <div className='flex items-center gap-2 w-full pt-2'>
        <PlaceholdersAndVanishInput
          placeholders={[
            "Modern elections aren't won in debates anymore...",
            'How to Build a Million Dollar Startup',
            "Wealth isn't about money in the bank...",
          ]}
          onChange={() => {}}
          onSubmit={() => {}}
        />
        <button
          disabled
          className='w-[25%] flex items-center justify-center gap-2 p-3 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors'
        >
          <GenerateIcon className='size-4' />
          <span className='text-sm'>Generate</span>
        </button>
      </div>
    </div>
  );
};
