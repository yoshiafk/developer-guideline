'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-collapsible';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedAccordionProps {
    children: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

interface AnimatedAccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
    isExpanded?: boolean;
    hasActiveItem?: boolean;
}

interface AnimatedAccordionContentProps {
    children: React.ReactNode;
    className?: string;
    isExpanded?: boolean;
}

const AnimatedAccordion = React.forwardRef<
    HTMLDivElement,
    AnimatedAccordionProps
>(({ children, open = false, onOpenChange = () => { }, className }, ref) => {
    return (
        <AccordionPrimitive.Root
            ref={ref}
            open={open}
            onOpenChange={onOpenChange}
            className={className}
        >
            {children}
        </AccordionPrimitive.Root>
    );
});
AnimatedAccordion.displayName = 'AnimatedAccordion';

const AnimatedAccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    AnimatedAccordionTriggerProps
>(({ children, className, isExpanded, hasActiveItem }, ref) => {
    return (
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'flex w-full items-center justify-between gap-2 px-2 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors text-left',
                'hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                hasActiveItem ? 'text-primary' : 'text-muted-foreground/60',
                className
            )}
            aria-expanded={isExpanded}
        >
            <span className="flex-1 text-left">{children}</span>
            <motion.div
                initial={false}
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                }}
            >
                <ChevronRight className="h-4 w-4 shrink-0" />
            </motion.div>
        </AccordionPrimitive.Trigger>
    );
});
AnimatedAccordionTrigger.displayName = 'AnimatedAccordionTrigger';

const AnimatedAccordionContent = React.forwardRef<
    HTMLDivElement,
    AnimatedAccordionContentProps
>(({ children, className, isExpanded }, ref) => {
    return (
        <AnimatePresence initial={false}>
            {isExpanded && (
                <motion.div
                    ref={ref}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                            height: {
                                type: 'spring',
                                stiffness: 500,
                                damping: 40,
                            },
                            opacity: {
                                duration: 0.2,
                                delay: 0.05,
                            },
                        },
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                            height: {
                                type: 'spring',
                                stiffness: 500,
                                damping: 40,
                            },
                            opacity: {
                                duration: 0.15,
                            },
                        },
                    }}
                    className={cn('overflow-hidden', className)}
                >
                    <div className="mt-2">
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});
AnimatedAccordionContent.displayName = 'AnimatedAccordionContent';

export {
    AnimatedAccordion,
    AnimatedAccordionTrigger,
    AnimatedAccordionContent,
};
