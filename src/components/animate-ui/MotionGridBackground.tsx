import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MotionGridBackgroundProps {
    className?: string;
    gridSize?: number;
    gridColor?: string;
    dotSize?: number;
    maskGradient?: string;
}

/**
 * MotionGridBackground component that provides an animated grid/dot background.
 */
const MotionGridBackground: React.FC<MotionGridBackgroundProps> = ({
    className,
    gridSize = 40,
    gridColor = 'currentColor',
    dotSize = 1,
    maskGradient = 'radial-gradient(circle at center, white, transparent 80%)',
}) => {
    return (
        <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
            <motion.div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(${gridColor} ${dotSize}px, transparent ${dotSize}px)`,
                    backgroundSize: `${gridSize}px ${gridSize}px`,
                    maskImage: maskGradient,
                    WebkitMaskImage: maskGradient,
                }}
                animate={{
                    backgroundPosition: [`0px 0px`, `${gridSize}px ${gridSize}px`],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <div
                className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"
                style={{ pointerEvents: 'none' }}
            />
        </div>
    );
};

export default MotionGridBackground;
