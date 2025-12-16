'use client';

import { ArrowRightIcon, CheckedIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { HookSkeleton } from './ai-script/hook';
import { ResearchSkeleton } from './ai-script/research';
import { ScriptSkeleton } from './ai-script/script';
import { StyleSkeleton } from './ai-script/style';
import { TopicSkeleton } from './ai-script/topic';

type StepStatus = 'pending' | 'processing' | 'complete';

interface Step {
  label: string;
  skeleton: React.ReactNode;
}

export const AiScriptStudio = () => {
  const stepDefinitions: Step[] = [
    { label: 'TOPIC', skeleton: <TopicSkeleton /> },
    { label: 'RESEARCH', skeleton: <ResearchSkeleton /> },
    { label: 'HOOK', skeleton: <HookSkeleton /> },
    { label: 'STYLE', skeleton: <StyleSkeleton /> },
    { label: 'SCRIPT', skeleton: <ScriptSkeleton /> },
  ];

  const [currentProcessingIndex, setCurrentProcessingIndex] = useState(0);

  // Handle step progression
  useEffect(() => {
    if (currentProcessingIndex >= stepDefinitions.length) return;

    const timer = setTimeout(() => {
      setCurrentProcessingIndex((prev) => prev + 1);
    }, 6000); // 6 seconds per step

    return () => clearTimeout(timer);
  }, [currentProcessingIndex, stepDefinitions.length]);

  // Handle restart after all steps complete
  useEffect(() => {
    const allComplete = currentProcessingIndex >= stepDefinitions.length;
    if (!allComplete) return;

    const restartTimer = setTimeout(() => {
      setCurrentProcessingIndex(0); // Restart from the beginning
    }, 5000); // 5 seconds delay after completion

    return () => clearTimeout(restartTimer);
  }, [currentProcessingIndex, stepDefinitions.length]);

  const getStepStatus = (index: number): StepStatus => {
    const allComplete = currentProcessingIndex >= stepDefinitions.length;
    if (allComplete) {
      return 'complete';
    }
    if (index < currentProcessingIndex) {
      return 'complete';
    } else if (index === currentProcessingIndex) {
      return 'processing';
    } else {
      return 'pending';
    }
  };

  const steps = stepDefinitions.map((step, idx) => ({
    ...step,
    status: getStepStatus(idx),
  }));

  // Show the last skeleton when all steps are complete, otherwise show the current processing one
  const skeletonIndex =
    currentProcessingIndex >= stepDefinitions.length
      ? stepDefinitions.length - 1
      : currentProcessingIndex;
  const currentSkeleton = stepDefinitions[skeletonIndex]?.skeleton;

  return (
    <div className='w-full h-full flex flex-col gap-4 p-4 bg-white/40'>
      <div className='flex items-center justify-center max-w-2xs mx-auto'>
        {steps.map((step, idx) => {
          const isComplete = step.status === 'complete';
          const isProcessing = step.status === 'processing';

          return (
            <div key={step.label} className='flex items-center'>
              {/* Step column */}
              <div className='flex flex-col items-center gap-2'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className='relative'
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

                {/* Label — perfectly centered under icon */}
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 + 0.2 }}
                  className={cn(
                    'text-xs font-semibold text-center min-w-14 transition-colors duration-300',
                    step.status === 'pending'
                      ? 'text-gray-400'
                      : step.status === 'processing'
                        ? 'text-amber-600 dark:text-amber-400'
                        : 'text-gray-700'
                  )}
                >
                  {step.label}
                </motion.span>
              </div>

              {/* Arrow between steps */}
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.15 + 0.3 }}
                >
                  <ArrowRightIcon className='h-full w-16 text-gray-300 -translate-y-[8px]' />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Show the currently processing skeleton, or the last one when all complete */}
      <AnimatePresence mode='wait'>
        {currentSkeleton && (
          <motion.div
            key={`skeleton-${skeletonIndex}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {currentSkeleton}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
