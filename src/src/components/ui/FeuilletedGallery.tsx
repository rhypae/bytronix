import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface FeuilletedGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export function FeuilletedGallery({ images, className = "" }: FeuilletedGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isWheelEnabled, setIsWheelEnabled] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelTimeoutRef = useRef<NodeJS.Timeout>();

  // Gestion du défilement avec la molette
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isWheelEnabled) return;
      
      e.preventDefault();
      e.stopPropagation();
      
      // Désactiver temporairement pour éviter les défilements multiples
      setIsWheelEnabled(false);
      clearTimeout(wheelTimeoutRef.current);
      
      const delta = e.deltaY;
      const newDirection = delta > 0 ? 1 : -1;
      
      setDirection(newDirection);
      
      if (delta > 0 && currentIndex < images.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (delta < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
      
      // Réactiver après un délai
      wheelTimeoutRef.current = setTimeout(() => {
        setIsWheelEnabled(true);
      }, 600);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(wheelTimeoutRef.current);
    };
  }, [currentIndex, images.length, isWheelEnabled]);

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToIndex = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  // Gestion des swipes tactiles
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    
    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      goToPrevious();
    } else if (info.offset.x < -swipeThreshold && currentIndex < images.length - 1) {
      goToNext();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -15 : 15,
      z: -100
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? -15 : 15,
      z: -100
    })
  };

  const currentImage = images[currentIndex];

  return (
    <div className={`relative w-full h-full feuillete-gallery ${className}`} ref={containerRef}>
      {/* Image principale avec effet feuilleté */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ perspective: '1000px' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.5, ease: "easeInOut" }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
              {/* Contenu simulé de l'image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center text-white/80 px-4">
                  <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
                    {currentImage.title}
                  </div>
                  <p className="text-white/60 text-sm sm:text-base max-w-md">
                    {currentImage.description}
                  </p>
                </div>
              </div>

              {/* Overlay d'information */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg mb-2">{currentImage.title}</h3>
                <p className="text-white/70 text-sm">{currentImage.alt}</p>
              </div>

              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out opacity-0 hover:opacity-100" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contrôles de navigation */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <motion.button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="p-2 bg-black/50 text-white border border-white/20 rounded-full backdrop-blur-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 transition-all"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ChevronLeft size={20} />
        </motion.button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center">
        <motion.button
          onClick={goToNext}
          disabled={currentIndex === images.length - 1}
          className="p-2 bg-black/50 text-white border border-white/20 rounded-full backdrop-blur-md disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 transition-all"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Indicateurs de position */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          />
        ))}
      </div>

      {/* Instructions de navigation */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <motion.div 
          className="bg-black/50 text-white/70 px-3 py-1 rounded-full text-xs backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          ↕ Molette ou glisser pour naviguer
        </motion.div>
      </div>
    </div>
  );
}