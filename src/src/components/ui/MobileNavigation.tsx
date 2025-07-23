import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { useUnifiedScroll } from '../../hooks/useUnifiedScroll';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { isMobile } = useMobileDetection();
  const { scrollToSection } = useUnifiedScroll();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Nos offres', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleMenuClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  const handleContactClick = () => {
    scrollToSection('#contact');
    setIsOpen(false);
  };

  if (!isMobile) return null;

  return (
    <>
      {/* Header mobile fixe */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.h1 
            className="font-display text-xl font-bold text-white"
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#hero')}
          >
            Bytronix.
          </motion.h1>

          {/* Menu button */}
          <motion.button
            className="relative z-50 w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Menu overlay mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-full flex flex-col justify-center items-center px-6">
              {/* Menu items */}
              <nav className="space-y-8 text-center mb-12">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    className="block text-2xl font-light text-white hover:text-gray-300 transition-colors mobile-touch-feedback"
                    onClick={() => handleMenuClick(item.href)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.button
                className="w-full max-w-sm bg-white text-black py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 active:scale-95 mobile-touch-feedback min-h-[50px]"
                onClick={handleContactClick}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="inline-block w-5 h-5 mr-2" />
                Réserver un appel gratuit
              </motion.button>

              {/* Indicateur de scroll */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <ChevronDown className="w-6 h-6 text-white/50 animate-bounce" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}