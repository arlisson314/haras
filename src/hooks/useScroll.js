import { useState, useEffect } from 'react';

function useScroll() {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = () => setScrollValue(window.scrollY);

  useEffect(() => window.addEventListener('scroll', handleScroll), []);

  return scrollValue;
}

export default useScroll;
