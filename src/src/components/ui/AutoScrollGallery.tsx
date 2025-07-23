import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface AutoScrollGalleryProps {
  images: GalleryImage[];
  autoScrollInterval?: number;
  className?: string;
}

export function AutoScrollGallery({ 
  images, 
  autoScrollInterval = 4000, 
  className = "" 
}: AutoScrollGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll des images avec animation de préchargement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [images.length, autoScrollInterval]);

  // Vérification de sécurité pour éviter les erreurs null
  if (!images || images.length === 0) {
    return <div className="w-full h-full flex items-center justify-center text-white">Chargement...</div>;
  }

  const currentImage = images[currentIndex];

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={{ perspective: "1000px" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            rotateY: -15,
            x: 100
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotateY: 0,
            x: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            rotateY: 15,
            x: -100
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            scale: { duration: 1.0 },
            rotateY: { duration: 0.8 },
            x: { duration: 0.9 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background avec gradient dynamique ou image */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
            {/* Image personnalisée ou gradient coloré */}
            {currentImage && currentImage.image ? (
              <motion.div 
                className="w-full h-full relative overflow-hidden"
                initial={{ filter: "blur(20px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 1.0, delay: 0.3 }}
              >
                <motion.img 
                  src={currentImage.image} 
                  alt={currentImage.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: currentImage.title === "Autoflow AI" ? 1.0 : 1.3 }}
                  animate={{ scale: currentImage.title === "Autoflow AI" ? 0.85 : 1.1 }}
                  transition={{ 
                    duration: 8,
                    ease: "linear"
                  }}
                  whileHover={{ scale: currentImage.title === "Autoflow AI" ? 0.8 : 1.05 }}
                />
                {/* Effet de particules brillantes */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            ) : (
              <motion.div 
                className={`w-full h-full flex items-center justify-center relative overflow-hidden ${
                  currentIndex === 1 ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20' :
                  currentIndex === 2 ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' :
                  'bg-gradient-to-br from-blue-500/20 to-purple-500/20'
                }`}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.0 }}
              >
                {/* Effet de morphing de fond */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)",
                      "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
                      "radial-gradient(circle at 40% 40%, #06b6d4 0%, transparent 50%)",
                      "radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%)"
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="text-center text-white px-4 max-w-4xl relative z-10">
                  <motion.h3 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                    initial={{ y: 50, opacity: 0, rotateX: 45 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ 
                      delay: 0.4, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {currentImage?.title || "Titre"}
                  </motion.h3>
                  <motion.p 
                    className="text-white/70 text-lg sm:text-xl md:text-2xl font-light"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.7, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 120
                    }}
                  >
                    {currentImage?.description || "Description"}
                  </motion.p>
                </div>
              </motion.div>
            )}
            
            {/* Effet de particules subtiles */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white/5 to-transparent opacity-30 pointer-events-none" />
          </div>

          {/* Indicateur sophistiqué de progression */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-3">
              {images.map((_, index) => (
                <motion.div
                  key={index}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'bg-white w-8 h-2' 
                      : 'bg-white/30 w-2 h-2'
                  }`}
                  animate={{
                    scale: index === currentIndex ? [1, 1.2, 1] : 1,
                    opacity: index === currentIndex ? 1 : 0.5
                  }}
                  transition={{
                    scale: { duration: 0.6, repeat: Infinity, repeatType: "reverse" },
                    opacity: { duration: 0.3 }
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}