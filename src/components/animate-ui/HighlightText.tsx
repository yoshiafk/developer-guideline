import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HighlightTextProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
    delay?: number;
    duration?: number;
}

/**
 * HighlightText component that creates a "marker" highlight effect behind the text.
 */
const HighlightText: React.FC<HighlightTextProps> = ({
    children,
    className,
    color = 'rgba(0, 51, 160, 0.15)', // Light AXA Blue
    delay = 0.5,
    duration = 0.8,
}) => {
    return (
        <span className={cn("relative inline-block px-1", className)}>
            <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                    delay,
                    duration,
                    ease: [0.6, 0.01, 0.05, 0.95],
                }}
                className="absolute bottom-[10%] left-0 h-[60%] -z-10"
                style={{ backgroundColor: color }}
            />
            {children}
        </span>
    );
};

export default HighlightText;
