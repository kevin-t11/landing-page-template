'use client';

import { ArrowRightIcon, CheckedIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { HookSkeleton } from './ai-script/hook';
import { ResearchSkeleton } from './ai-script/research';
import { ScriptSkeleton } from './ai-script/script';
import { StyleSkeleton } from './ai-script/style';
import { TopicSkeleton } from './ai-script/topic';

type StepStatus = 'pending' | 'processing' | 'complete';

const stepDefinitions = [
  { label: 'TOPIC', skeleton: <TopicSkeleton /> },
  { label: 'RESEARCH', skeleton: <ResearchSkeleton /> },
  { label: 'HOOK', skeleton: <HookSkeleton /> },
  { label: 'STYLE', skeleton: <StyleSkeleton /> },
  { label: 'SCRIPT', skeleton: <ScriptSkeleton /> },
];

export const AiScriptStudio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [currentStep, setCurrentStep] = useState(0);

  // Progress through steps when in view
  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (currentStep >= stepDefinitions.length) {
      const restartTimer = setTimeout(() => setCurrentStep(0), 5000);
      return () => clearTimeout(restartTimer);
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isInView, currentStep]);

  const getStepStatus = (index: number): StepStatus => {
    if (currentStep >= stepDefinitions.length) return 'complete';
    if (index < currentStep) return 'complete';
    if (index === currentStep) return 'processing';
    return 'pending';
  };

  const skeletonIndex = Math.min(currentStep, stepDefinitions.length - 1);

  return (
    <div
      ref={containerRef}
      className='w-full h-full flex flex-col gap-4 p-4 bg-white/40'
    >
      <div className='flex items-center justify-center max-w-2xs mx-auto'>
        {stepDefinitions.map((step, idx) => {
          const status = getStepStatus(idx);
          const isComplete = status === 'complete';
          const isProcessing = status === 'processing';

          return (
            <div key={step.label} className='flex items-center'>
              <div className='flex flex-col items-center gap-2'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                >
                  <div
                    className={cn(
                      'w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300',
                      isComplete &&
                        'bg-green-500 text-white shadow-lg shadow-green-500/40',
                      isProcessing &&
                        'bg-white dark:bg-gray-800 border-2 border-amber-400 shadow-lg shadow-amber-400/40',
                      !isComplete &&
                        !isProcessing &&
                        'bg-gray-200 dark:bg-gray-700 text-gray-500'
                    )}
                  >
                    {isComplete ? (
                      <CheckedIcon className='h-9 w-9' />
                    ) : isProcessing ? (
                      <Loader className='h-6 w-6 text-amber-400 animate-spin' />
                    ) : (
                      idx + 1
                    )}
                  </div>
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }
                  }
                  transition={{ delay: idx * 0.15 + 0.2 }}
                  className={cn(
                    'text-xs font-semibold text-center min-w-14 transition-colors duration-300',
                    status === 'pending' && 'text-gray-400',
                    status === 'processing' &&
                      'text-amber-600 dark:text-amber-400',
                    status === 'complete' && 'text-gray-700'
                  )}
                >
                  {step.label}
                </motion.span>
              </div>

              {idx < stepDefinitions.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: idx * 0.15 + 0.3 }}
                >
                  <ArrowRightIcon className='h-full w-16 text-gray-300 -translate-y-[8px]' />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      <AnimatePresence mode='wait'>
        {isInView && (
          <motion.div
            key={`skeleton-${skeletonIndex}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {stepDefinitions[skeletonIndex].skeleton}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
