import { motion } from "framer-motion";
import { SectionTransition } from "../ui/SectionTransition";
import { useMobileDetection } from "../../hooks/useMobileDetection";

export function ProjectTransition() {
  const { isMobile, isMobileSmall } = useMobileDetection();

  return (
    <motion.section 
      className={`relative ${
        isMobile ? 'min-h-[50vh] py-16' : 'min-h-[60vh] sm:min-h-[65vh] py-20 sm:py-24 md:py-28'
      } flex items-center justify-center overflow-hidden bg-black/70 backdrop-blur-sm`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: isMobile ? 0.8 : 1.2 }}
      viewport={{ once: true }}
      style={{ 
        zIndex: 11,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.75) 100%)'
      }}
    >
      {/* Enhanced overlay with gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/10 backdrop-blur-sm"></div>
      
      {/* Background animé subtil */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/10 via-gray-900/5 to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-950/5 to-transparent"></div>
      </div>

      {/* Contenu principal optimisé mobile */}
      <div className={`relative z-10 text-center ${isMobile ? 'px-6 max-w-full' : 'px-4 max-w-4xl'} mx-auto`}>
        <motion.h2 
          className={`font-display ${
            isMobileSmall 
              ? 'text-3xl mb-6 px-2 py-2' 
              : isMobile 
              ? 'text-4xl mb-7 px-4 py-3' 
              : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 sm:mb-10 px-4 py-3'
          } font-black italic leading-[1.2]`}
          style={{
            background: 'linear-gradient(135deg, #9ca3af 0%, #ffffff 50%, #e5e7eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.3 : 1, delay: isMobile ? 0.1 : 0.3 }}
          viewport={{ once: true }}
        >
          Prêt pour votre projet ?
        </motion.h2>

        <motion.p 
          className={`${
            isMobile ? 'text-lg mb-0 max-w-full px-4' : 'text-lg sm:text-xl md:text-2xl mb-0 max-w-xl px-4'
          } text-white/80 font-light mx-auto leading-relaxed`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.2 : 0.6 }}
          viewport={{ once: true }}
        >
          Choisissez l'accompagnement qui correspond à vos ambitions
        </motion.p>


      </div>

      {/* Transitions vers sections adjacentes */}
      <SectionTransition variant="both" intensity="strong" />


    </motion.section>
  );
}