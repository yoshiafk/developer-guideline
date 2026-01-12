import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface HoverCardProps extends Omit<HTMLMotionProps<'div'>, 'whileHover' | 'whileTap'> {
  children: React.ReactNode;
  scale?: number;
  subtle?: boolean; // New: For even more minimal hover effect
}

interface HoverCardOptions {
  disableOnAntCard?: boolean;
  disableHover?: boolean;
}

const HoverCard: React.FC<HoverCardProps & HoverCardOptions> = ({
  children,
  scale = 1.01, // Reduced from 1.02 for subtler effect
  subtle = false,
  disableOnAntCard = true,
  disableHover = false,
  ...props
}) => {
  // Helper: recursively check children for ant-card or card class names
  const containsCard = (node: any): boolean => {
    if (!node) return false;
    if (Array.isArray(node)) return node.some(containsCard);
    if (typeof node === 'object' && node.props) {
      const className = node.props.className || '';
      if (typeof className === 'string' && /(^|\s)(ant-card|card|minimal-card|info-card|warning-card|success-card|error-card)(\s|$)/.test(className)) {
        return true;
      }
      return containsCard(node.props.children);
    }
    return false;
  };

  // disable hover either explicitly via prop or if it wraps an ant card
  const hasCardChild = (disableHover || disableOnAntCard) && containsCard(children);

  const whileHover = hasCardChild ? undefined : (subtle ? { boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' } : { scale, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' });
  const whileTap = hasCardChild ? undefined : (subtle ? undefined : { scale: 0.99 });
  const transition = hasCardChild ? undefined : ({ type: 'spring' as const, stiffness: 400, damping: 25, duration: 0.2 });

  const wrapperClass = `hover-card ${hasCardChild ? 'no-hover' : ''} ${props.className || ''}`.trim();

  return (
    <motion.div
      {...props}
      className={wrapperClass}
      whileHover={whileHover as any}
      whileTap={whileTap as any}
      transition={transition as any}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;