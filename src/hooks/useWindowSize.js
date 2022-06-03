import { useEffect, useState } from 'react';

export const useWindowHeight = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowresize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowresize);
    return () => window.removeEventListener('resize', handleWindowresize);
  });

  return dimensions;
};
