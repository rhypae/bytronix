import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useUnifiedScroll } from "../../hooks/useUnifiedScroll";
import { SectionTransition } from "../ui/SectionTransition";
import { useMobileDetection } from "../../hooks/useMobileDetection";

export function Footer() {
  const { scrollToSection } = useUnifiedScroll();
  const { isMobile, isMobileSmall } = useMobileDetection();

  const scrollToContact = () => scrollToSection('#contact');

  return (
    <footer className={`relative ${isMobile ? 'py-20' : 'py-24 sm:py-28'} overflow-hidden bg-black/90 backdrop-blur-sm`} style={{ 
      zIndex: 14,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,1) 100%)'
    }}>
      {/* Enhanced overlay for footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/50 backdrop-blur-sm"></div>
      


      <div className={`relative z-10 container mx-auto ${isMobile ? 'px-6' : 'px-4'}`}>
        {/* Header section optimisée mobile */}
        <motion.div 
          className={`text-center ${isMobile ? 'mb-12' : 'mb-16'}`}
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={`font-display ${isMobile ? 'text-2xl mb-3' : 'text-3xl sm:text-4xl mb-4'} font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent`}>
            Bytronix.
          </h3>
          <p className={`text-gray-400 font-sans font-light tracking-wide max-w-md mx-auto ${isMobile ? 'text-base' : 'text-lg'}`}>
            Votre partenaire digital de confiance
          </p>
        </motion.div>

        {/* Main content grid adaptatif mobile */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-8 mb-12' : 'grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-16'}`}>
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold text-white mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-400 font-sans">
              <li className="hover:text-white transition-colors cursor-pointer">Sites Web</li>
              <li className="hover:text-white transition-colors cursor-pointer">Applications Mobiles</li>
              <li className="hover:text-white transition-colors cursor-pointer">Stratégie Digitale</li>
              <li className="hover:text-white transition-colors cursor-pointer">Marketing Digital</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 font-sans">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>+33 7 81 58 66 00</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>contact@bytronix.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>France</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold text-white mb-4">Prêt à commencer ?</h4>
            <p className="text-gray-400 font-sans mb-6 text-sm leading-relaxed">
              Transformons ensemble votre vision en réalité digitale.
            </p>
            <motion.button
              onClick={scrollToContact}
              className="ios-button-primary group w-full relative overflow-hidden"
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full"
                whileHover={{
                  translateX: "100%",
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Concrétisons votre ambition
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { name: "YouTube", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
            { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
            { name: "TikTok", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href="#"
              className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.name}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.path} />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm font-sans">
            &copy; 2025 Bytronix. Tous droits réservés.
          </p>
        </motion.div>
      </div>
      
      {/* Transition finale en douceur */}
      <SectionTransition variant="top" intensity="light" />
    </footer>
  );
}
