import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PreviewLinkCardProps {
  href: string;
  title: string;
  description: string;
  previewImage?: string;
  className?: string;
}

/**
 * PreviewLinkCard component with a modern hover effect that can show a preview image.
 */
const PreviewLinkCard: React.FC<PreviewLinkCardProps> = ({
  href,
  title,
  description,
  previewImage,
  className,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={href}
      className={cn(
        "group relative block p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
            {title}
          </h3>
          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>

      <AnimatePresence>
        {isHovered && previewImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
            <img
              src={previewImage}
              alt={title}
              className="w-full h-full object-cover opacity-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-primary"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />
    </a>
  );
};

export default PreviewLinkCard;
