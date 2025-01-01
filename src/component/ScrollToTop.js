// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page every time the route changes
    window.scrollTo(0, 0);
  }, [location]); // Trigger when location changes (i.e., route changes)

  return null;
};

export default ScrollToTop;
