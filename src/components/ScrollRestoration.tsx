
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Store scroll positions for each page
const scrollPositions = new Map<string, number>();

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Restore scroll position or scroll to top
    const restorePosition = () => {
      if (scrollPositions.has(pathname)) {
        window.scrollTo(0, scrollPositions.get(pathname) || 0);
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Use requestAnimationFrame for smoother restoration
    requestAnimationFrame(() => {
      restorePosition();
    });

    // Save scroll position on unmount
    return () => {
      scrollPositions.set(pathname, window.scrollY);
    };
  }, [pathname]);

  // Use passive event listener for better performance
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.set(pathname, window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
