import { motion } from "framer-motion";
import { useUnifiedScroll } from "../../hooks/useUnifiedScroll";
import { SectionTransition } from "../ui/SectionTransition";
import { useMobileDetection } from "../../hooks/useMobileDetection";

export function Pricing() {
  const { scrollToSection } = useUnifiedScroll();
  const { isMobile, isMobileSmall } = useMobileDetection();
  const scrollToContact = () => scrollToSection('#contact');

  const plans = [
    {
      name: "ESSENTIEL",
      price: "697",
      description: "",
      popular: false,
      features: [
        "Site web professionnel 5 pages OU landing page optimisée",
        "Business plan détaillé avec étude de marché", 
        "Vidéo explicative du contenu (3-5 min)",
        "Optimisation SEO de base",
        "Maintenance technique 1 semaine + support prioritaire 30 jours"
      ]
    },
    {
      name: "BUSINESS",
      price: "997", 
      description: "",
      popular: true,
      features: [
        "Site web sur-mesure avec identité visuelle complète",
        "Business plan approfondi avec stratégie de croissance", 
        "Vidéo personnalisée et script détaillé de votre activité",
        "Stratégie marketing digitale et plan réseaux sociaux",
        "Maintenance technique 2 semaines + support prioritaire 60 jours"
      ]
    }
  ];

  return (
    <section 
      id="pricing" 
      className={`relative ${isMobile ? 'py-20' : 'py-24 sm:py-28 md:py-32 lg:py-36'} overflow-hidden bg-black/75 backdrop-blur-sm`}
      style={{ 
        zIndex: 12,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.9) 100%)'
      }}
    >
      {/* Enhanced overlay with stronger gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/20 backdrop-blur-sm"></div>
      
      <div className={`container mx-auto ${isMobile ? 'px-6' : 'px-4'} max-w-6xl relative z-10`}>
        {/* Titre principal de la section */}
        <motion.div 
          className={`text-center ${isMobile ? 'mb-16' : 'mb-20'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.3 : 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 
            className={`font-display ${
              isMobileSmall 
                ? 'text-4xl mb-4 px-2 py-2' 
                : isMobile 
                ? 'text-5xl mb-5 px-4 py-2' 
                : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 px-4 py-2'
            } font-bold leading-[1.2]`}
            style={{
              background: 'linear-gradient(135deg, #9ca3af 0%, #ffffff 50%, #e5e7eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
            }}
          >
            Nos <span className="font-black">offres</span>
          </h2>
          <p className={`text-white/80 ${
            isMobile ? 'text-lg px-4' : 'text-lg md:text-xl px-4'
          } font-light max-w-2xl mx-auto`}>
            Des solutions sur-mesure pour propulser votre projet digital
          </p>
        </motion.div>

        {/* Design professionnel et élégant des formules */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6 px-2' : 'lg:grid-cols-2 gap-8 px-4'} max-w-6xl mx-auto`}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: isMobile ? 0.3 : 1, 
                delay: isMobile ? index * 0.1 : index * 0.2 
              }}
              viewport={{ once: true }}
            >
              

              {/* Carte principale avec nouveau design élégant */}
              <div className="relative overflow-hidden rounded-2xl transition-all duration-500 group border border-white/10 hover:border-white/20 backdrop-blur-sm shadow-2xl hover:shadow-3xl" 
                   style={{ backgroundColor: "#1f2128" }}>
                
                {/* Effet de lueur subtile au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                {/* Header redesigné avec espacement optimisé */}
                <div className={`${isMobile ? 'p-5' : 'p-6'} text-center border-b border-white/10`}>
                  <motion.h3 
                    className={`font-display ${isMobile ? 'text-xl mb-3' : 'text-2xl mb-4'} font-bold text-white tracking-wide`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                  >
                    {plan.name === "ESSENTIEL" ? "ESSENTIEL" : "BUSINESS"}
                  </motion.h3>
                  
                  <motion.div
                    className="mb-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                  >
                    <div className="text-center">
                      <div className="flex items-baseline justify-center gap-1 mb-1">
                        <span className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-black text-white font-mono`}>
                          {plan.price}
                        </span>
                        <span className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white/90`}>€</span>
                      </div>
                      <span className="text-xs font-light text-white/50 italic">
                        {plan.popular ? 'en moyenne' : 'seulement'}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Features avec espacement optimisé mobile */}
                <div className={`${isMobile ? 'p-5 pt-4' : 'p-6 pt-4'}`}>
                  <motion.div 
                    className={`${isMobile ? 'space-y-3 mb-5' : 'space-y-4 mb-6'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                      >
                        <div className={`${isMobile ? 'w-1.5 h-1.5 mt-2.5' : 'w-2 h-2 mt-2'} rounded-full bg-white/60 flex-shrink-0`}></div>
                        <span className={`text-white/90 font-medium leading-relaxed ${isMobile ? 'text-sm' : 'text-sm'}`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Bouton CTA optimisé mobile avec taille tactile */}
                  <motion.button
                    onClick={scrollToContact}
                    className={`relative w-full overflow-hidden rounded-xl ${
                      isMobile ? 'py-5 px-6 text-base' : 'py-4 px-6 text-sm'
                    } font-bold tracking-wide transition-all duration-300 bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl ${
                      isMobile ? 'active:scale-[0.97] min-h-[50px]' : 'hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <span className="relative z-10">
                      Choisir {plan.name === "ESSENTIEL" ? "Essentiel" : "Business"}
                    </span>
                    
                    {/* Effet de brillance sur le bouton */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texte sur mesure avec espacement amélioré */}
        <motion.div
          className={`text-center ${isMobile ? 'mt-24 pt-16' : 'mt-28 pt-20'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: isMobile ? 0.5 : 1.2, duration: isMobile ? 0.3 : 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 text-lg font-light mb-4">
            Vous avez des besoins spécifiques ?
          </p>
          <motion.button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de votre projet sur-mesure
          </motion.button>
        </motion.div>
      </div>

      {/* Transitions vers sections adjacentes */}
      <SectionTransition variant="both" intensity="strong" />
    </section>
  );
}