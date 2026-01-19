'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    sideOffset?: number;
    delayDuration?: number;
    className?: string;
}

const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({
    children,
    content,
    side = 'top',
    sideOffset = 4,
    delayDuration = 200,
    className,
}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <TooltipPrimitive.Provider delayDuration={delayDuration}>
            <TooltipPrimitive.Root open={open} onOpenChange={setOpen}>
                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
                <AnimatePresence>
                    {open && (
                        <TooltipPrimitive.Portal forceMount>
                            <TooltipPrimitive.Content
                                side={side}
                                sideOffset={sideOffset}
                                asChild
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96,
                                        y: side === 'bottom' ? -4 : side === 'top' ? 4 : 0,
                                        x: side === 'left' ? 4 : side === 'right' ? -4 : 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.96,
                                        transition: { duration: 0.1 },
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                    className={cn(
                                        'z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground shadow-md',
                                        className
                                    )}
                                >
                                    {content}
                                    <TooltipPrimitive.Arrow className="fill-primary" />
                                </motion.div>
                            </TooltipPrimitive.Content>
                        </TooltipPrimitive.Portal>
                    )}
                </AnimatePresence>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
};

AnimatedTooltip.displayName = 'AnimatedTooltip';

export { AnimatedTooltip };
