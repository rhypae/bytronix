import { useEffect } from "react";
import { useIsMobile } from "./use-mobile";

export function useCursor() {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const cursor = document.querySelector('.cursor') as HTMLElement;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      const targetX = e.clientX - 4;
      const targetY = e.clientY - 4;
      
      cursor.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      cursor.style.transition = 'none';
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      cursor.classList.add('cursor-hover');
      
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        cursor.classList.add('cursor-button');
      } else if (target.tagName === 'A' || target.closest('a')) {
        cursor.classList.add('cursor-link');
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-hover', 'cursor-button', 'cursor-link');
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);
}