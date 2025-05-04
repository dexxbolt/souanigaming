
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Store scroll positions for each page
const scrollPositions = new Map<string, number>();

const ScrollRestoration = () => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    // Restore scroll position when the component mounts or when the path changes
    if (scrollPositions.has(path)) {
      setTimeout(() => {
        window.scrollTo(0, scrollPositions.get(path) || 0);
      }, 0);
    } else {
      // If it's a new page, scroll to top
      window.scrollTo(0, 0);
    }

    // Save the scroll position when unmounting or when path changes
    return () => {
      scrollPositions.set(path, window.scrollY);
    };
  }, [path]);

  // Save scroll position on scroll events
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.set(path, window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [path]);

  return null; // This component doesn't render anything
};

export default ScrollRestoration;
