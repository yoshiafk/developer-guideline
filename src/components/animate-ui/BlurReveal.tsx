'use client';

import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlurRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    blur?: string;
    once?: boolean;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
}

const BlurReveal: React.FC<BlurRevealProps> = ({
    children,
    className,
    delay = 0,
    duration = 0.6,
    blur = '10px',
    once = true,
    direction = 'up',
    distance = 20,
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: '-50px' });

    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: distance };
            case 'down':
                return { y: -distance };
            case 'left':
                return { x: distance };
            case 'right':
                return { x: -distance };
            case 'none':
            default:
                return {};
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                filter: `blur(${blur})`,
                ...getInitialPosition(),
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        filter: 'blur(0px)',
                        x: 0,
                        y: 0,
                    }
                    : {
                        opacity: 0,
                        filter: `blur(${blur})`,
                        ...getInitialPosition(),
                    }
            }
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};

BlurReveal.displayName = 'BlurReveal';

export { BlurReveal };
