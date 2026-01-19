import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PreviewLinkCardProps {
  href: string;
  title: string;
  description: string;
  previewImage?: string;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * PreviewLinkCard component with a premium, animated hover effect.
 */
const PreviewLinkCard: React.FC<PreviewLinkCardProps> = ({
  href,
  title,
  description,
  previewImage,
  className,
  icon
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      to={href}
      className={cn(
        "group relative block p-8 rounded-3xl bg-card border border-border/50 transition-all duration-500 overflow-hidden h-full shadow-sm hover:shadow-2xl hover:shadow-primary/5",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Glow */}
      <div
        className={cn(
          "absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0",
          "bg-gradient-to-br from-primary/10 via-transparent to-transparent"
        )}
      />

      <div className="relative z-10 flex flex-col h-full space-y-4">
        <div className="flex items-start justify-between">
          <div className={cn(
            "p-3 rounded-2xl bg-muted/50 text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3",
            "shadow-inner"
          )}>
            {icon || <ExternalLink className="h-6 w-6" />}
          </div>
          <motion.div
            animate={{
              x: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0,
              rotate: isHovered ? 45 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <ExternalLink className="h-5 w-5 text-primary" />
          </motion.div>
        </div>

        <div className="space-y-2 flex-1">
          <h3 className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {description}
          </p>
        </div>

        <div className="pt-4 flex items-center text-xs font-bold uppercase tracking-widest text-primary/0 group-hover:text-primary transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          Explore Guide <ChevronRight className="ml-1 h-3 w-3" />
        </div>
      </div>

      {/* Image Preview Overlay */}
      <AnimatePresence>
        {isHovered && previewImage && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.05, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img
              src={previewImage}
              alt={title}
              className="w-full h-full object-cover filter grayscale"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Gradient Border/Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '100%' : '-100%' }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        />
      </div>
    </Link>
  );
};

export default PreviewLinkCard;
