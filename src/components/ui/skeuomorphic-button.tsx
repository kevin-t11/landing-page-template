import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const skeuomorphicButtonVariants = cva(
  'inline-flex items-center justify-center gap-4 rounded-2xl border-2 px-10 py-6 text-lg font-normal transition-all hover:scale-[1.02] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-primary text-primary-foreground shadow-[0_4px_12px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface SkeuomorphicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof skeuomorphicButtonVariants> {
  asChild?: boolean;
}

const SkeuomorphicButton = React.forwardRef<
  HTMLButtonElement,
  SkeuomorphicButtonProps
>(({ className, variant, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(skeuomorphicButtonVariants({ variant }), className)}
      style={{
        background: 'linear-gradient(180deg, hsl(var(--primary) / 0.9) 0%, hsl(var(--primary)) 100%)',
      }}
      {...props}
    >
      {children}
    </button>
  );
});

SkeuomorphicButton.displayName = 'SkeuomorphicButton';

export { SkeuomorphicButton, skeuomorphicButtonVariants };