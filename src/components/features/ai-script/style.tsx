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
    <div className='flex items-center gap-3'>
      <div className={cn('p-1.5 rounded-md', color.bg, color.text)}>{icon}</div>
      <div className='flex-1 space-y-1.5'>
        <div className='flex justify-between text-[10px] font-semibold text-gray-500 uppercase tracking-wide'>
          <span>{label}</span>
          <span>{width}%</span>
        </div>
        <div className='h-1.5 w-full bg-gray-100 rounded-full overflow-hidden'>
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
    <div className='w-full h-50 bg-white rounded-xl border border-gray-200 px-4 shadow-sm shadow-sky-100/50 flex flex-col justify-center gap-5 relative overflow-hidden'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className='w-7 h-7'
          >
            <Lottie
              animationData={styleAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>

          <span className='text-sm font-semibold text-gray-900 '>
            {' '}
            TONE & STYLE
          </span>
        </div>

        <div className='flex items-center gap-1.5'>
          <div className='w-2.5 h-2.5 rounded-full bg-red-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
          <div className='w-2.5 h-2.5 rounded-full bg-green-400' />
        </div>
      </div>

      <CompactSlider
        icon={<Zap size={14} />}
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
        icon={<Smile size={14} />}
        label='Humor'
        target={75}
        delay={0.5}
        color={{ bg: 'bg-pink-50', text: 'text-pink-500', fill: 'bg-pink-400' }}
      />
      <CompactSlider
        icon={<Type size={14} />}
        label='Detail'
        target={90}
        delay={0.8}
        color={{ bg: 'bg-sky-50', text: 'text-sky-500', fill: 'bg-sky-500' }}
      />
    </div>
  );
};
