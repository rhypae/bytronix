import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useUnifiedScroll } from "../../hooks/useUnifiedScroll";
import { useMobileDetection } from "../../hooks/useMobileDetection";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const { scrollToSection } = useUnifiedScroll();
  const { isMobile, isMobileSmall } = useMobileDetection();

  const scrollToContact = () => scrollToSection('#contact', 60);
  const scrollToPortfolio = () => scrollToSection('#realisations', 60);

  return (
    <section 
      ref={heroRef}
      className="sticky top-0 h-screen flex items-center justify-center overflow-hidden hero-section"
      style={{ 
        zIndex: 1,
        background: 'rgba(0,0,0,0.6)'
      }}
    >
      {/* Spline 3D Background - Fixed pour couvrir toute la page */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <spline-viewer 
          url="https://prod.spline.design/vynOa4zPRoFs7SLM/scene.splinecode"
          style={{
            width: '100%',
            height: '100vh',
            opacity: isMobile ? '0.3' : '0.6',
            filter: isMobile ? 'contrast(0.7) brightness(0.5)' : 'contrast(0.9) brightness(0.7)'
          }}
          loading-anim-type="spinner-small-dark"
          events-target="global"
          background-color="transparent"
        />
      </div>


      <motion.div 
        className={`relative z-10 text-center ${isMobile ? 'px-6 max-w-full' : 'px-4 max-w-4xl'} mx-auto`}
        style={{ opacity: textOpacity }}
      >
        <motion.div 
          className="hero-text-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: isMobile ? 0.3 : 1.2, 
            ease: "easeOut"
          }}
        >
          <h1 
            className={`font-display ${
              isMobileSmall 
                ? 'text-4xl leading-[1.1] mb-6 px-2 py-3' 
                : isMobile 
                ? 'text-5xl leading-[1.15] mb-7 px-4 py-4' 
                : 'text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.2] mb-6 sm:mb-8 px-4 sm:px-6 py-4'
            } font-bold transition-all duration-800`}
            style={{
              background: 'linear-gradient(135deg, #9ca3af 0%, #ffffff 50%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: isMobile 
                ? 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))'
                : 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))',
            }}
            data-text="De l'idée au succès en 30 jours"
          >
            <span className="font-light">De l'idée au </span>
            <span className="font-bold">succès</span>
            <br />
            <span className="font-light">en </span>
            <span className="font-bold py-2">30 jours</span>
          </h1>
        </motion.div>
        
        <motion.p 
          className={`font-sans text-white/80 ${
            isMobileSmall 
              ? 'text-lg leading-relaxed mb-12 max-w-full px-2' 
              : isMobile 
              ? 'text-xl leading-relaxed mb-16 max-w-full px-4' 
              : 'text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-16 sm:mb-20 max-w-3xl px-4 sm:px-6'
          } font-light tracking-wide text-light-effect mx-auto`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: isMobile ? 0.1 : 0.3, 
            duration: isMobile ? 0.3 : 1 
          }}
        >
          Transformons votre idée en site web professionnel et stratégie digitale qui marche
        </motion.p>
        
        {/* Primary CTA */}
        <motion.div 
          className={`flex flex-col sm:flex-row ${
            isMobile ? 'gap-6' : 'gap-4 sm:gap-6'
          } justify-center items-center px-4 mt-4`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: isMobile ? 0.2 : 0.6, 
            duration: isMobile ? 0.3 : 1 
          }}
        >
          <motion.button
            onClick={scrollToContact}
            className="ios-button-compact ios-button-primary w-full sm:w-auto max-w-sm group pl-[15px] pr-[15px] pt-[6px] pb-[6px]"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-out"></div>
            <span className="relative z-10 flex items-center justify-center">
              S'inscrire
            </span>
          </motion.button>
          <motion.button
            onClick={scrollToPortfolio}
            className="ios-button-compact ios-button-secondary w-full sm:w-auto max-w-sm group pl-[15px] pr-[15px] pt-[6px] pb-[6px]"
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-out"></div>
            <span className="relative z-10 flex items-center justify-center">
              Voir nos réalisations
            </span>
          </motion.button>
        </motion.div>

      </motion.div>
      
    </section>
  );
}
