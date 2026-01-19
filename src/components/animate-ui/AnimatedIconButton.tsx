'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface AnimatedIconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'scale' | 'rotate' | 'bounce' | 'shake';
    asChild?: boolean;
}

const AnimatedIconButton = React.forwardRef<
    HTMLButtonElement,
    AnimatedIconButtonProps
>(({ className, variant = 'scale', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const getHoverAnimation = () => {
        switch (variant) {
            case 'rotate':
                return { rotate: 15, scale: 1.1 };
            case 'bounce':
                return { y: -4, scale: 1.05 };
            case 'shake':
                return { x: [0, -2, 2, -2, 2, 0], transition: { duration: 0.4 } };
            case 'scale':
            default:
                return { scale: 1.1 };
        }
    };

    const getTapAnimation = () => {
        switch (variant) {
            case 'rotate':
                return { rotate: 0, scale: 0.95 };
            case 'bounce':
                return { y: 0, scale: 0.95 };
            case 'shake':
                return { scale: 0.95 };
            case 'scale':
            default:
                return { scale: 0.95 };
        }
    };

    return (
        <motion.div
            whileHover={getHoverAnimation()}
            whileTap={getTapAnimation()}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
            }}
        >
            <Comp
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    className
                )}
                {...props}
            >
                {children}
            </Comp>
        </motion.div>
    );
});

AnimatedIconButton.displayName = 'AnimatedIconButton';

export { AnimatedIconButton };
