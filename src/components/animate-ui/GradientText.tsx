import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: [string, string, string]; // [From, Via, To]
    animationDuration?: number;
}

/**
 * GradientText component that applies an animated gradient effect to text.
 */
const GradientText: React.FC<GradientTextProps> = ({
    children,
    className,
    colors = ['#0033A0', '#4299E1', '#0033A0'], // AXA Blue, Light Blue, AXA Blue
    animationDuration = 8,
}) => {
    return (
        <motion.span
            className={cn(
                "relative inline-block text-transparent bg-clip-text font-bold",
                className
            )}
            animate={{
                backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
                duration: animationDuration,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{
                backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[0]})`,
                backgroundSize: '200% auto',
            }}
        >
            {children}
        </motion.span>
    );
};

export default GradientText;
