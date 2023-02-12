import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  // useEffect(() => {
  //   setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  //   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  //     setIsDarkMode(event.matches);
  //   });
  // }, []);
  return { isDarkMode, setIsDarkMode };
};

export default useDarkMode;
