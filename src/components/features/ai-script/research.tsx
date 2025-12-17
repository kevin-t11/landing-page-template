import { cn } from '@/lib/utils';
import researchAnimation from '@/lottie/research.json';
import Lottie from 'lottie-react';
import { BarChart3, BookOpen, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const ResearchSkeleton = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100)); // Faster progress for shorter feel
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full h-50 bg-white rounded-xl border border-gray-200 md:p-4 p-3 shadow-sm shadow-sky-100/50 relative overflow-hidden flex flex-col'>
      {/* Header */}
      <div className='flex items-center justify-between mb-1 md:px-1 px-0'>
        <div className='flex items-center gap-2'>
          <div className='md:w-10 md:h-10 w-7 h-7'>
            <Lottie
              animationData={researchAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
          <span className='md:text-xs text-[10px] font-bold text-gray-700 uppercase tracking-wider -ml-1 md:ml-0'>
            Researching
          </span>

          <div className='md:text-xs text-[10px] font-mono text-sky-600'>
            {Math.round(progress)}%
          </div>
        </div>

        <div className='flex items-center gap-1.5'>
          <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-red-400' />
          <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-yellow-400' />
          <div className='md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-green-400' />
        </div>
      </div>

      {/* Cards Row */}
      <div className='flex-1 flex gap-3 h-full pb-12'>
        <ResearchCard
          icon={<Search className='md:size-4 size-3' />}
          title='Trends'
          value='High Vol.'
          active={progress > 15}
        />
        <ResearchCard
          icon={<BookOpen className='md:size-4 size-3' />}
          title='Sources'
          value='3 Verified'
          active={progress > 45}
        />
        <ResearchCard
          icon={<BarChart3 className='md:size-4 size-3' />}
          title='Stats'
          value='98% Acc.'
          active={progress > 75}
        />
      </div>

      {/* Bottom Progress Bar */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gray-50'>
        <motion.div
          className='h-full bg-sky-500'
          animate={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

interface ResearchCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  active: boolean;
}
const ResearchCard = ({ icon, title, value, active }: ResearchCardProps) => (
  <div
    className={cn(
      'w-full  flex items-center justify-center md:gap-2 gap-1 rounded-xl border transition-all duration-700 ease-in-out md:h-full h-16',
      active ? 'bg-sky-50 border-sky-200 shadow-sm' : 'bg-white border-gray-100'
    )}
  >
    <div className='flex items-center md:gap-4 gap-2'>
      <div
        className={cn(
          'md:p-2 p-1.5 rounded-full transition-all duration-700 ease-in-out',
          active
            ? 'bg-white text-sky-600 shadow-sm'
            : 'bg-gray-50 text-gray-400'
        )}
      >
        {icon}
      </div>
      <div className='text-center'>
        <div className='text-[10px] md:text-xs font-semibold text-gray-400 uppercase tracking-wide md:mb-1 mb-0.5'>
          {title}
        </div>
        <div
          className={cn(
            'text-[10px] md:text-xs font-medium transition-all duration-700 ease-in-out',
            active ? 'text-sky-900' : 'text-gray-300'
          )}
        >
          {active ? value : 'Pending...'}
        </div>
      </div>
    </div>
  </div>
);
