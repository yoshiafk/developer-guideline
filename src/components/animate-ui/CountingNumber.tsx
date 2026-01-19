import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CountingNumberProps {
    value: number;
    duration?: number;
    className?: string;
    suffix?: string;
    prefix?: string;
}

/**
 * CountingNumber component that animates a number from 0 to target value when in view.
 */
const CountingNumber: React.FC<CountingNumberProps> = ({
    value,
    duration = 2,
    className,
    suffix = '',
    prefix = '',
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = prefix + Intl.NumberFormat("en-US").format(Math.round(latest)) + suffix;
            }
        });
    }, [springValue, prefix, suffix]);

    return (
        <span
            ref={ref}
            className={cn("inline-block tabular-nums font-bold tracking-tight", className)}
        >
            0
        </span>
    );
};

export default CountingNumber;
