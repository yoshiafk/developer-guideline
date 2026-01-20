'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ShimmerButton } from '@/components/animate-ui/ShimmerButton';
import { cn } from '@/lib/utils';

export interface CallToActionProps {
    title?: string;
    description: string;
    primaryAction: {
        label: string;
        href: string;
    };
    secondaryAction?: {
        label: string;
        href: string;
    };
    className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
    title = 'Ready to Build?',
    description,
    primaryAction,
    secondaryAction,
    className,
}) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                'p-12 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-primary/90',
                'text-primary-foreground relative overflow-hidden',
                className
            )}
        >
            {/* Animated background elements */}
            <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                    x: [20, -20, 20],
                    y: [-20, 20, -20],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"
                animate={{
                    x: [-10, 10, -10],
                    y: [10, -10, 10],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Content */}
            <div className="relative z-10 space-y-6">
                <motion.h2
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    className="opacity-80 max-w-2xl text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    {description}
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <ShimmerButton
                        background="white"
                        shimmerColor="rgba(0, 0, 0, 0.1)"
                        className="text-primary font-bold"
                        onClick={() => (window.location.href = primaryAction.href)}
                    >
                        {primaryAction.label}
                        <ArrowRight className="h-4 w-4" />
                    </ShimmerButton>

                    {secondaryAction && (
                        <motion.a
                            href={secondaryAction.href}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                                'inline-flex items-center justify-center px-6 py-3 rounded-xl',
                                'bg-white/10 border border-white/20',
                                'text-sm font-semibold',
                                'hover:bg-white/20 transition-colors'
                            )}
                        >
                            {secondaryAction.label}
                        </motion.a>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default CallToAction;
