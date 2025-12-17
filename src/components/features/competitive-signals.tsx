'use client';

import { cn } from '@/lib/utils';
import {
  Activity,
  ArrowUpRight,
  Bell,
  LucideIcon,
  Radar,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type Signal = {
  type: 'opportunity' | 'alert' | 'trend';
  label: string;
  desc: string;
  metric: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
};

const signals: Signal[] = [
  {
    type: 'opportunity',
    label: 'Viral Gap',
    desc: 'Minimalist Editing',
    metric: '+400%',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    type: 'alert',
    label: 'Competitor Breakout',
    desc: '@TechDaily',
    metric: 'Spiking',
    icon: Bell,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    type: 'trend',
    label: 'Audience Shift',
    desc: 'Prefer Short-Form',
    metric: '92%',
    icon: TrendingUp,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-green-100',
  },
];
export const CompetitiveSignals = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });
  const [activeSignals, setActiveSignals] = useState<Signal[]>([signals[0]]);

  useEffect(() => {
    if (!isInView) {
      const timeout = setTimeout(() => {
        setActiveSignals([signals[0]]);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setActiveSignals((prev) => {
        if (prev.length >= signals.length) {
          clearInterval(interval);
          return prev; // Keep all signals, stop animation
        }
        return [signals[prev.length], ...prev];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      className='w-full h-60 p-4 flex items-center gap-6 relative overflow-hidden'
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left: Radar Visual */}
      <div className='w-1/3 h-full flex items-center justify-center relative'>
        <div className='relative w-32 h-32 flex items-center justify-center'>
          <div className='absolute inset-0 bg-white'>
            {/* Radar Rings */}
            {[1, 2, 3].map((r) => (
              <div
                key={r}
                className='absolute inset-0 border border-neutral-200 rounded-full'
                style={{ margin: `${(3 - r) * 12}px` }}
              />
            ))}
          </div>
          {/* Crosshairs */}
          <div className='absolute inset-0 flex items-center justify-center opacity-10'>
            <div className='w-full h-px bg-gray-900' />
            <div className='h-full w-px bg-gray-900 absolute' />
          </div>

          {/* Sweeping Radar Line */}
          <motion.div
            className='absolute inset-0 rounded-full'
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(245, 158, 11, 0.2) 360deg)',
            }}
            animate={isInView ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Blips */}
          {activeSignals.map((signal, idx) => {
            const angles = [45, 160, 290];
            const dists = [30, 45, 25];
            const angle = angles[idx] * (Math.PI / 180);
            const dist = dists[idx];
            const x = Math.cos(angle) * dist;
            const y = Math.sin(angle) * dist;

            return (
              <motion.div
                key={signal.label}
                className='absolute w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)] z-10'
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.3 }}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}
        </div>

        <div className='absolute bottom-2 text-[9px] font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1'>
          <Activity size={10} className='animate-pulse text-amber-500' />
          Live Monitoring
        </div>
      </div>

      {/* Right: Signals Feed */}
      <div className='flex-1 flex flex-col h-full relative z-10'>
        <div className='flex items-center justify-between mb-2'>
          <div className='flex items-center gap-2'>
            <Radar size={16} className='text-amber-600' />
            <span className='text-xs font-bold text-gray-800 uppercase tracking-wider'>
              Competitive Signals
            </span>
          </div>
          <div className='px-2 py-0.5 bg-gray-900 text-white text-[9px] font-bold rounded-full'>
            {activeSignals.length} Active
          </div>
        </div>

        <div className='space-y-2.5 flex-1'>
          {activeSignals.map((signal, idx) => (
            <motion.div
              layout
              key={signal.label}
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: -10, scale: 0.8 }
              }
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
              }}
              className={cn(
                'flex items-center gap-3 p-2.5 rounded-lg border-2 bg-white relative overflow-hidden group cursor-pointer',
                signal.border
              )}
            >
              <div
                className={cn(
                  'p-1.5 rounded-md shrink-0',
                  signal.bg,
                  signal.color
                )}
              >
                <signal.icon size={14} />
              </div>

              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2'>
                  <span className='text-[10px] font-bold text-gray-700 uppercase'>
                    {signal.label}
                  </span>
                  {idx === 0 && (
                    <span className='text-[8px] px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-full font-bold'>
                      NEW
                    </span>
                  )}
                </div>
                <div className='text-xs text-gray-500 truncate font-medium'>
                  {signal.desc}
                </div>
              </div>

              <div className='text-right shrink-0'>
                <div
                  className={cn(
                    'text-xs font-bold flex items-center gap-0.5',
                    signal.color
                  )}
                >
                  {signal.metric}
                  <ArrowUpRight size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
