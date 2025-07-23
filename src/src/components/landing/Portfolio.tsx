import { motion } from "framer-motion";
import { AutoScrollGallery } from "../ui/AutoScrollGallery";
import { SectionTransition } from "../ui/SectionTransition";
import { useMobileDetection } from "../../hooks/useMobileDetection";

// Un seul projet avec galerie auto-défilante
import fouadVtcImage from "@assets/imagddde (1)_1753068632820.png";
import autoflowAiImage from "@assets/autoflow-ai-presentation.jpg";

const galleryImages = [
  { id: 1, title: "Service VTC Premium", description: "Plateforme de réservation chauffeur privé avec interface élégante", image: fouadVtcImage },
  { id: 2, title: "Autoflow AI", description: "Présentation plan de démarrage complet avec IA intégrée", image: autoflowAiImage },
  { id: 3, title: "App Mobile Fintech", description: "Gestion financière intelligente avec IA intégrée" }
];

export function Portfolio() {
  const { isMobile, isMobileSmall } = useMobileDetection();
  
  return (
    <section 
      id="realisations"
      className={`relative ${isMobile ? 'min-h-[80vh] py-20' : 'min-h-screen py-24 sm:py-28 md:py-32 lg:py-36'} overflow-hidden bg-black/60 backdrop-blur-sm`}
      style={{ 
        zIndex: 10,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.8) 100%)'
      }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/10 backdrop-blur-sm"></div>
      


      <div className={`relative z-10 max-w-4xl mx-auto ${isMobile ? 'px-6' : 'px-4 sm:px-6 lg:px-8'}`}>
        <motion.h2 
          className={`font-display ${
            isMobileSmall 
              ? 'text-4xl mb-4 px-2 py-2' 
              : isMobile 
              ? 'text-5xl mb-5 px-4 py-2' 
              : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 px-4 py-2'
          } text-center leading-[1.2]`}
          style={{
            background: 'linear-gradient(135deg, #9ca3af 0%, #ffffff 50%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.3 : 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-light">Nos </span>
          <span className="font-bold">réalisations</span>
        </motion.h2>

        <motion.p 
          className={`font-sans text-white/60 ${
            isMobile ? 'text-lg mb-16 px-4' : 'text-base sm:text-lg md:text-xl mb-20 sm:mb-24 px-4'
          } font-light tracking-wide leading-relaxed text-center max-w-2xl mx-auto`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.1 : 0.2 }}
          viewport={{ once: true }}
        >
          Découvrez comment nous transformons les idées en succès digitaux concrets
        </motion.p>

        {/* Une seule galerie centrée avec auto-scroll optimisée mobile */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.1 : 0.3 }}
          viewport={{ once: true, margin: isMobile ? "-10px" : "-100px" }}
        >
          <div className={`relative ${
            isMobileSmall 
              ? 'h-[35vh] rounded-xl' 
              : isMobile 
              ? 'h-[40vh] rounded-xl' 
              : 'h-[40vh] sm:h-[42vh] lg:h-[45vh] rounded-2xl'
          } overflow-hidden shadow-2xl`}>
            <AutoScrollGallery 
              images={galleryImages} 
              autoScrollInterval={isMobile ? 6000 : 5000}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Transitions entre sections */}
      <SectionTransition variant="both" intensity="medium" />
    </section>
  );
}