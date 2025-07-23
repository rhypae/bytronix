import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Phone, Mail, Zap, Send } from "lucide-react";
import { SectionTransition } from "../ui/SectionTransition";
import { useMobileDetection } from "../../hooks/useMobileDetection";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedOffer: ""
  });

  const ref = useRef<HTMLElement>(null);
  const { isMobile, isMobileSmall } = useMobileDetection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "", selectedOffer: "" });
    
    // Toast de succès (simulé)
    alert("Votre message a été envoyé ! Nous vous répondrons sous 24h.");
  };

  return (
    <section 
      id="contact" 
      className={`relative ${isMobile ? 'py-20' : 'py-24 sm:py-28 md:py-32 lg:py-36'} overflow-hidden bg-black/80 backdrop-blur-sm`}
      ref={ref}
      style={{ 
        zIndex: 13,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.95) 100%)'
      }}
    >
      {/* Enhanced overlay with stronger gradient for better form readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/35 backdrop-blur-sm"></div>
      


      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header optimisé avec spacing amélioré */}
        <motion.div 
          className={`text-center ${isMobile ? 'mb-16' : 'mb-24'}`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-[1.2] px-4 py-2"
            style={{
              background: 'linear-gradient(135deg, #9ca3af 0%, #ffffff 50%, #e5e7eb 100%)',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
              duration: isMobile ? 0.3 : 1.2, 
              delay: isMobile ? 0.1 : 0.2,
              ease: "easeOut"
            }}
          >
            <span className="font-light">Commençons </span>
            <span className="font-bold">votre projet</span>
          </motion.h2>
          
          <motion.p 
            className="font-sans text-white/60 text-base sm:text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
              delay: isMobile ? 0.2 : 0.6, 
              duration: isMobile ? 0.3 : 1,
              ease: "easeOut"
            }}
          >
            Décrivez-nous votre vision, nous la transformerons en réalité digitale
          </motion.p>
        </motion.div>

        {/* Contenu principal avec spacing optimisé */}
        <div className={`grid lg:grid-cols-2 ${
          isMobile ? 'gap-16' : 'gap-16 sm:gap-20 lg:gap-24'
        } items-start`}>
          {/* Informations de contact avec animations staggerées */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.8, delay: isMobile ? 0.3 : 0.8 }}
          >
            <div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-10 px-4 sm:px-0">
                Parlons de votre ambition
              </h3>
              
              <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
                <motion.div
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ 
                    duration: isMobile ? 0.3 : 0.8, 
                    delay: isMobile ? 0.3 : 1.0,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderColor: "rgba(255,255,255,0.2)"
                  }}
                >
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Appel découverte gratuit</h4>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                      30 minutes pour comprendre votre projet et vous proposer la meilleure stratégie
                    </p>
                    <p className="text-white/80 font-medium mt-2 sm:mt-3 text-sm sm:text-base">+33 7 81 58 66 00</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderColor: "rgba(255,255,255,0.2)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center relative z-10">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email direct</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Réponse garantie sous 24h pour toute demande
                    </p>
                    <p className="text-white/80 font-medium mt-3">contact@bytronix.fr</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-6 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-sm relative overflow-hidden group"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderColor: "rgba(255,255,255,0.2)"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center relative z-10">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Démarrage express</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Premiers livrables sous 48h pour les projets urgents
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact avec animations sophistiquées */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.95 }}
            transition={{ 
              duration: 1.2, 
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
          >
            <h4 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Décrivez votre projet
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">Nom *</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:bg-black/40 focus:outline-none transition-all backdrop-blur-sm text-sm"
                    placeholder="Laurent Dupont"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-3">Email *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:bg-black/40 focus:outline-none transition-all backdrop-blur-sm text-sm"
                    placeholder="Votre mail."
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">Téléphone</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:bg-black/40 focus:outline-none transition-all backdrop-blur-sm text-sm"
                  placeholder="Votre numéro."
                />
              </div>
              
              <div className="relative">
                <label className="block text-white/80 text-sm font-medium mb-3">Offre souhaitée</label>
                <div className="relative">
                  <motion.select 
                    name="selectedOffer"
                    value={formData.selectedOffer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-12 bg-black/30 border border-white/20 rounded-xl text-white focus:border-white/40 focus:bg-black/40 focus:outline-none transition-all backdrop-blur-sm text-sm appearance-none cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    <option value="" className="bg-gray-900 text-white">Choisissez votre formule</option>
                    <option value="essentiel" className="bg-gray-900 text-white">Essentiel (697€) - Site + business plan + vidéo explicative</option>
                    <option value="business" className="bg-gray-900 text-white">Business (997€) - Site sur-mesure + marketing + vidéo personnalisée</option>
                    <option value="sur-mesure" className="bg-gray-900 text-white">Solution personnalisée - Devis sur mesure</option>
                    <option value="conseil" className="bg-gray-900 text-white">Consultation stratégique uniquement</option>
                  </motion.select>
                  
                  {/* Icône de flèche correctement positionnée */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">Parlez-nous du projet.</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-white/40 focus:bg-black/40 focus:outline-none transition-all resize-none backdrop-blur-sm text-sm"
                  placeholder=""
                />
              </div>
              
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="ios-button-compact ios-button-accent w-full mt-8 group disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  delay: 1.8, 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Send size={20} />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

      </div>
      
      {/* Transitions fluides vers le footer */}
      <SectionTransition variant="both" intensity="strong" />
    </section>
  );
}