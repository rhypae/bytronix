import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface SiteLoadingProps {
  onComplete: () => void;
}

export function SiteLoading({ onComplete }: SiteLoadingProps) {
  const [phase, setPhase] = useState<'loading' | 'complete' | 'fadeout'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulation du chargement
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('complete');
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === 'complete') {
      const timer = setTimeout(() => {
        setPhase('fadeout');
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'fadeout') {
      const timer = setTimeout(onComplete, 1200);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'fadeout' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "#1f2128" }}
          exit={{ 
            opacity: 0,
            backgroundColor: "#1f2128"
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >


          <div className="relative z-10 text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <motion.h1 
                className="font-display text-5xl md:text-6xl font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #9ca3af 0%, #ffffff 50%, #e5e7eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Bytronix.
              </motion.h1>
              <motion.p 
                className="font-sans text-gray-300 text-lg font-light tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Votre succès digital se prépare...
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <motion.div 
              className="w-80 h-1 bg-gray-700/30 rounded-full mx-auto mb-8 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-gray-400 text-sm font-light"
            >
              {phase === 'loading' && (
                <motion.span
                  key="loading"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Chargement {Math.round(progress)}%
                </motion.span>
              )}
              
              {phase === 'complete' && (
                <motion.span
                  key="complete"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-white/80 font-medium"
                >
                  ✓ Prêt !
                </motion.span>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}