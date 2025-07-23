import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete' | 'moving'>('loading');
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (phase === 'loading') {
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.random() * 15 + 5;
          if (next >= 100) {
            setPhase('complete');
            return 100;
          }
          return next;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'complete') {
      const timer = setTimeout(() => {
        setPhase('moving');
        setTimeout(onComplete, 1000);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Effets de background sophistiqués */}
          <div className="absolute inset-0">
            {/* Dégradé de base */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
            
            {/* Particules lumineuses */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full blur-2xl opacity-20 ${
                  i === 0 ? 'w-96 h-96 bg-blue-500/30 top-10 left-10' :
                  i === 1 ? 'w-80 h-80 bg-purple-500/20 top-1/4 right-1/4' :
                  i === 2 ? 'w-72 h-72 bg-indigo-500/25 bottom-1/4 left-1/4' :
                  i === 3 ? 'w-64 h-64 bg-pink-500/15 top-1/2 left-1/2' :
                  i === 4 ? 'w-88 h-88 bg-cyan-500/20 bottom-10 right-10' :
                  'w-56 h-56 bg-violet-500/25 top-3/4 left-3/4'
                }`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                  x: [0, Math.sin(i) * 50, 0],
                  y: [0, Math.cos(i) * 50, 0],
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 1.2
                }}
              />
            ))}

            {/* Grille subtile */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="relative z-10 text-center">
            <motion.div
              className="relative"
              initial={{ opacity: 1 }}
              animate={phase === 'moving' ? { opacity: 0 } : { opacity: 1 }}
              transition={{
                duration: 0.5
              }}
            >
              {/* Logo avec style exact */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.h1
                  className="font-display text-3xl font-bold text-white mb-2"
                  style={{ 
                    fontSize: '1.5rem', 
                    lineHeight: '2rem',
                    letterSpacing: '-0.025em'
                  }}
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(255,255,255,0.1)',
                      '0 0 20px rgba(255,255,255,0.3)', 
                      '0 0 10px rgba(255,255,255,0.1)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Bytronix.
                </motion.h1>
                
                {/* Sous-titre élégant */}
                <motion.p
                  className="text-white/60 text-sm font-light tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Vous y êtes presque
                </motion.p>
              </motion.div>

              {/* Indicateur de progression moderne */}
              {phase === 'loading' && (
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {/* Barre de progression */}
                  <div className="w-80 max-w-sm mx-auto">
                    <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-white/40 via-white/80 to-white/40 rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Pourcentage avec animation */}
                  <motion.div
                    className="text-white/40 text-xs font-mono tracking-widest"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {Math.round(progress)}%
                  </motion.div>

                  {/* Points animés */}
                  <motion.div
                    className="flex justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-white/60 rounded-full"
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* Animation de complétion */}
              {phase === 'complete' && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      borderColor: ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.1)']
                    }}
                    transition={{ duration: 1, repeat: 2 }}
                    style={{ border: '2px solid' }}
                  >
                    <motion.div
                      className="text-white text-2xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      ✓
                    </motion.div>
                  </motion.div>
                  <motion.p
                    className="text-white/80 text-sm font-light"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: 1 }}
                  >
                    Préparation terminée
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Effet de transition final */}
          {phase === 'moving' && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              onAnimationComplete={() => {
                setTimeout(() => {
                  onComplete();
                }, 200);
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}