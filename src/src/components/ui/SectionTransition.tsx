import { motion } from "framer-motion";

interface SectionTransitionProps {
  variant?: 'top' | 'bottom' | 'both';
  intensity?: 'light' | 'medium' | 'strong';
}

export function SectionTransition({ variant = 'both', intensity = 'medium' }: SectionTransitionProps) {
  const getOpacity = () => {
    switch (intensity) {
      case 'light': return 'opacity-20';
      case 'medium': return 'opacity-30';
      case 'strong': return 'opacity-40';
      default: return 'opacity-30';
    }
  };

  const getGradient = (direction: 'top' | 'bottom') => {
    if (direction === 'top') {
      return 'bg-gradient-to-b from-black/60 via-black/20 to-transparent';
    }
    return 'bg-gradient-to-t from-black/60 via-black/20 to-transparent';
  };

  return (
    <div className="absolute inset-x-0 pointer-events-none">
      {(variant === 'top' || variant === 'both') && (
        <motion.div 
          className={`absolute top-0 inset-x-0 h-32 ${getGradient('top')} ${getOpacity()}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >

        </motion.div>
      )}

      {(variant === 'bottom' || variant === 'both') && (
        <motion.div 
          className={`absolute bottom-0 inset-x-0 h-32 ${getGradient('bottom')} ${getOpacity()}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >

        </motion.div>
      )}
    </div>
  );
}