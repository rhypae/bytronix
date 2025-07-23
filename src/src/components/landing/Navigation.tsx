import { motion } from "framer-motion";

import { useUnifiedScroll } from "../../hooks/useUnifiedScroll";

export function Navigation() {
  const { scrollToSection } = useUnifiedScroll();
  const scrollToContact = () => scrollToSection('#contact');

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-16 py-8"
        style={{ mixBlendMode: 'difference' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="flex justify-between items-center">
          <div className="font-display text-2xl font-bold text-white">Bytronix.</div>
        </div>
      </motion.nav>
    </>
  );
}
