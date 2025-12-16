'use client';

import React from 'react';

type ShimmerContainerProps = {
  children: React.ReactNode;
  duration?: number;
  color?: string;
  shimmerColor?: string;
  className?: string;
  style?: React.CSSProperties;
};

function ShimmerContainer({
  children,
  duration = 2,
  className = '',
  style = {},
  color = '#737373',
  shimmerColor = '#d4d4d4',
}: ShimmerContainerProps) {
  const shimmerStyle: React.CSSProperties = {
    ...style,
    position: 'relative',
    overflow: 'hidden',
    animation: `shimmer ${duration}s infinite linear`,
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            background: linear-gradient(90deg, ${color} 0%, ${color} 40%, ${shimmerColor} 50%, ${color} 60%, ${color} 100%);
            background-size: 200% 100%;
            background-position: 200% 0%;
          }
          100% {
            background: linear-gradient(90deg, ${color} 0%, ${color} 40%, ${shimmerColor} 50%, ${color} 60%, ${color} 100%);
            background-size: 200% 100%;
            background-position: 0% 0%;
          }
        }
      `}</style>
      <div className={className} style={shimmerStyle}>
        {children}
      </div>
    </>
  );
}

export { ShimmerContainer, type ShimmerContainerProps };
