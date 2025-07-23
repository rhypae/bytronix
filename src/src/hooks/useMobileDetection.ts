import { useState, useEffect } from 'react';

export function useMobileDetection() {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      
      // Détection par largeur d'écran (approche responsive)
      const isMobileScreen = width < 768;
      
      // Détection par User Agent pour plus de précision
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      
      // Détection par touch capability
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Combinaison des méthodes pour une détection optimale
      setIsMobile(isMobileScreen || (isMobileUA && isTouchDevice));
    };

    // Vérification initiale
    checkDevice();

    // Écoute des changements de taille d'écran
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return {
    isMobile,
    screenWidth,
    isTablet: screenWidth >= 768 && screenWidth < 1024,
    isDesktop: screenWidth >= 1024,
    isMobileSmall: screenWidth < 480,
    isMobileLarge: screenWidth >= 480 && screenWidth < 768
  };
}