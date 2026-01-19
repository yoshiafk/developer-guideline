import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedFeedbackIconProps {
    icon: React.ReactNode;
    className?: string;
    type?: 'success' | 'warning' | 'error' | 'neutral';
}

/**
 * AnimatedFeedbackIcon component that provides subtle animations for icons.
 */
const AnimatedFeedbackIcon: React.FC<AnimatedFeedbackIconProps> = ({
    icon,
    className,
    type = 'neutral',
}) => {
    const getColors = () => {
        switch (type) {
            case 'success': return 'text-emerald-500 bg-emerald-500/10';
            case 'warning': return 'text-amber-500 bg-amber-500/10';
            case 'error': return 'text-destructive bg-destructive/10';
            default: return 'text-primary bg-primary/10';
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "flex items-center justify-center p-3 rounded-xl transition-colors",
                getColors(),
                className
            )}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {icon}
            </motion.div>
        </motion.div>
    );
};

export default AnimatedFeedbackIcon;
