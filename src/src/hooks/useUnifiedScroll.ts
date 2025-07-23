import { useCallback, useRef } from 'react';

/**
 * Hook unifié pour gérer tous les défilements de page
 * Remplace tous les autres hooks de scroll pour éviter les conflits
 */
export function useUnifiedScroll() {
  const isScrollingRef = useRef(false);

  const scrollToSection = useCallback((selector: string, offset: number = 80) => {
    // Éviter les scrolls multiples simultanés
    if (isScrollingRef.current) return;
    
    const element = document.querySelector(selector);
    if (!element) return;

    isScrollingRef.current = true;

    // Calculer la position précise
    const elementRect = element.getBoundingClientRect();
    const targetPosition = window.pageYOffset + elementRect.top - offset;

    // Utiliser le scroll natif avec behavior smooth
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Réinitialiser après délai optimisé
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800); // Délai aligné avec la durée du scroll smooth natif

  }, []);

  return { scrollToSection };
}