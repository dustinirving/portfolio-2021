import { useState } from 'react';

const useColorMode = () => {
  const [colorMode, setColorMode] = useState('system');
  return {
    colorMode,
    setColorMode,
  };
};

export default useColorMode;
