import { cn } from '@/lib/utils';
import styleAnimation from '@/lottie/style.json';
import Lottie from 'lottie-react';
import { Smile, Type, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface CompactSliderProps {
  icon: React.ReactNode;
  label: string;
  target: number;
  color: { bg: string; text: string; fill: string };
  delay: number;
}

const CompactSlider = ({
  icon,
  label,
  target,
  color,
  delay,
}: CompactSliderProps) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setWidth(target), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay, target]);

  return (
    <div className='flex items-center md:gap-3 gap-2'>
      <div className={cn('md:p-1.5 p-1 rounded-md', color.bg, color.text)}>
        {icon}
      </div>
      <div className='flex-1 md:space-y-1.5 space-y-1'>
        <div className='flex justify-between text-[10px] md:font-semibold font-medium text-gray-500 uppercase tracking-wide'>
          <span>{label}</span>
          <span>{width}%</span>
        </div>
        <div className='md:h-1.5 h-1 w-full bg-gray-100 rounded-full overflow-hidden'>
          <motion.div
            className={cn('h-full rounded-full', color.fill)}
            initial={{ width: 0 }}
            animate={{ width: `${width}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
};

export const StyleSkeleton = () => {
  return (
    <div className='w-full h-50 bg-white rounded-xl border border-gray-200 md:px-4 px-3 shadow-sm shadow-sky-100/50 flex flex-col justify-center relative overflow-hidden'>
      <div className='flex flex-col md:gap-5 gap-3 md:mt-0 -mt-12'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center md:gap-2 gap-1'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              className='md:w-7 md:h-7 w-5 h-5'
            >
              <Lottie
                animationData={styleAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </motion.div>

            <span className='md:text-xs text-[10px] font-bold text-gray-700 uppercase tracking-wider'>
              TONE & STYLE
            </span>
          </div>

          <div className='flex items-center gap-1.5'>
            <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-red-400' />
            <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-yellow-400' />
            <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-green-400' />
          </div>
        </div>

        <CompactSlider
          icon={<Zap className='md:size-[14px] size-3' />}
          label='Energy'
          target={90}
          delay={0.2}
          color={{
            bg: 'bg-amber-50',
            text: 'text-amber-500',
            fill: 'bg-amber-400',
          }}
        />
        <CompactSlider
          icon={<Smile className='md:size-[14px] size-3' />}
          label='Humor'
          target={75}
          delay={0.5}
          color={{
            bg: 'bg-pink-50',
            text: 'text-pink-500',
            fill: 'bg-pink-400',
          }}
        />
        <CompactSlider
          icon={<Type className='md:size-[14px] size-3' />}
          label='Detail'
          target={90}
          delay={0.8}
          color={{ bg: 'bg-sky-50', text: 'text-sky-500', fill: 'bg-sky-500' }}
        />
      </div>
    </div>
  );
};
