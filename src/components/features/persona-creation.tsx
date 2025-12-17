'use client';

import { CheckedIcon } from '@/icons';
import {
  Briefcase,
  Fingerprint,
  Mic2,
  ScanFace,
  Target,
  User,
} from 'lucide-react';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useEffect, useState } from 'react';

export const PersonaCreation = () => {
  const [scanComplete, setScanComplete] = useState(false);
  const [phase, setPhase] = useState('scanning');

  useEffect(() => {
    // Scanning phase: 0-3s
    const scanTimer = setTimeout(() => {
      setPhase('analyzing');
    }, 3000);

    // Complete phase: 3-5s
    const completeTimer = setTimeout(() => {
      setPhase('complete');
      setScanComplete(true);
    }, 5000);

    // Reset: 5-7s
    const resetTimer = setTimeout(() => {
      setPhase('scanning');
      setScanComplete(false);
    }, 7000);

    return () => {
      clearTimeout(scanTimer);
      clearTimeout(completeTimer);
      clearTimeout(resetTimer);
    };
  }, [scanComplete]);

  const attributes = [
    {
      icon: Target,
      label: 'Audience',
      value: 'Gen Z & Tech',
      color: 'text-rose-500',
      bg: 'bg-rose-50',
    },
    {
      icon: Mic2,
      label: 'Voice',
      value: 'Witty & Direct',
      color: 'text-violet-500',
      bg: 'bg-violet-50',
    },
    {
      icon: Briefcase,
      label: 'Brand',
      value: 'Personal',
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 24 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className='w-full h-full p-4 flex items-center justify-between relative overflow-hidden '>
      {/* Background Ambience */}
      <div className='absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50' />

      {/* Left: Animated Avatar Layers */}
      <AnimatePresence mode='wait'>
        {!scanComplete && (
          <motion.div
            key='avatar-container'
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className='flex-1 flex items-center justify-center relative'
          >
            <div className='relative w-24 h-24 flex items-center justify-center'>
              {/* Pulsing Layers */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className='absolute inset-0 rounded-full border border-sky-300/40 bg-sky-100/30'
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{
                    scale: [1, 1.6, 1.6],
                    opacity: [0.4, 0, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.8,
                    repeat: Infinity,
                    ease: 'easeOut',
                    repeatDelay: 0,
                  }}
                />
              ))}

              {/* Core Avatar */}
              <motion.div
                className='relative z-10 w-20 h-20 bg-linear-to-br from-sky-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-indigo-300/50 text-white overflow-hidden'
                animate={{
                  scale: phase === 'complete' ? 1.05 : 1,
                  boxShadow:
                    phase === 'complete'
                      ? '0 10px 35px -5px rgba(99, 102, 241, 0.6)'
                      : '0 10px 25px -5px rgba(99, 102, 241, 0.3)',
                }}
                transition={{ duration: 0.6 }}
              >
                <User size={32} strokeWidth={2.5} />

                {/* Scanning Line */}
                {phase === 'scanning' && (
                  <motion.div
                    className='absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-white to-transparent'
                    animate={{
                      top: ['-10%', '110%'],
                    }}
                    transition={{
                      duration: 2.3,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 0,
                    }}
                    style={{
                      boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                    }}
                  />
                )}

                {/* Fingerprint Overlay */}
                <motion.div
                  className='absolute inset-0 flex items-center justify-center'
                  animate={{
                    opacity: phase === 'analyzing' ? 0.3 : 0.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    animate={
                      phase === 'analyzing'
                        ? {
                            opacity: [0.15, 0.4, 0.15],
                            scale: [1, 1.05, 1],
                          }
                        : {
                            opacity: 0.1,
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      repeat: phase === 'analyzing' ? Infinity : 0,
                      ease: 'easeInOut',
                    }}
                  >
                    <Fingerprint size={48} strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Status Badge */}
              <motion.div
                className='absolute -bottom-2 px-3 py-1 bg-white border border-indigo-100 rounded-full shadow-md text-[10px] font-bold text-indigo-600 flex items-center gap-1 z-20 whitespace-nowrap'
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={
                    phase === 'analyzing' ? { rotate: 360 } : { rotate: 0 }
                  }
                  transition={{
                    duration: 1,
                    repeat: phase === 'analyzing' ? Infinity : 0,
                    ease: 'linear',
                  }}
                >
                  <ScanFace size={10} />
                </motion.div>
                <span>
                  {phase === 'scanning' ? 'Scanning...' : 'Analyzing...'}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right: Detected Attributes */}
      <AnimatePresence>
        {!scanComplete && (
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 space-y-3 relative z-10 min-w-20'
          >
            {attributes.map((attr) => (
              <motion.div
                key={attr.label}
                variants={item as Variants}
                layout='position'
                whileHover={{ scale: 1.03 }}
                className='
            flex items-center gap-3 p-2.5 rounded-lg
            bg-white/70 border border-gray-100/50
            backdrop-blur-sm cursor-default
          '
              >
                <div className={`p-2 rounded-md ${attr.bg} ${attr.color}`}>
                  <attr.icon size={14} strokeWidth={2.5} />
                </div>

                <div>
                  <div className='text-[10px] font-semibold text-gray-400 uppercase tracking-wide'>
                    {attr.label}
                  </div>
                  <div className='text-xs font-bold text-gray-700'>
                    {attr.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Overlay */}
      <AnimatePresence>
        {scanComplete && (
          <motion.div
            key='success-overlay'
            className='absolute w-full h-full inset-0 z-30 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <motion.div
              className='flex flex-col items-center gap-3'
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <motion.div
                className='w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200'
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.4,
                    ease: 'easeOut',
                  }}
                >
                  <CheckedIcon className='text-white size-10' />
                </motion.div>
              </motion.div>
              <motion.div
                className='text-center'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.4,
                  ease: 'easeOut',
                }}
              >
                <div className='text-sm font-bold text-gray-800 mb-0.5'>
                  Persona Locked
                </div>
                <div className='text-[10px] text-gray-500 font-medium'>
                  Voice adapted successfully
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
