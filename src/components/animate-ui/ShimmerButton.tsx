'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShimmerButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
    (
        {
            shimmerColor = 'rgba(255, 255, 255, 0.3)',
            borderRadius = '0.75rem',
            shimmerDuration = '2s',
            background = 'hsl(var(--primary))',
            className,
            children,
            onDrag: _onDrag,
            onDragStart: _onDragStart,
            onDragEnd: _onDragEnd,
            onAnimationStart: _onAnimationStart,
            onAnimationEnd: _onAnimationEnd,
            onAnimationIteration: _onAnimationIteration,
            ...props
        },
        ref
    ) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 17,
                }}
                className={cn(
                    'relative inline-flex items-center justify-center overflow-hidden px-8 py-3',
                    'text-sm font-semibold text-primary-foreground',
                    'transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    'shadow-lg hover:shadow-xl hover:shadow-primary/30',
                    className
                )}
                style={{
                    borderRadius,
                    background,
                } as any}
                {...props}
            >
                {/* Shimmer effect */}
                <span
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ borderRadius }}
                >
                    <span
                        className="absolute inset-0 -translate-x-full animate-shimmer"
                        style={{
                            background: `linear-gradient(
                  90deg,
                  transparent,
                  ${shimmerColor},
                  transparent
                )`,
                            animationDuration: shimmerDuration,
                        }}
                    />
                </span>

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </motion.button>
        );
    }
);

ShimmerButton.displayName = 'ShimmerButton';

export { ShimmerButton };
