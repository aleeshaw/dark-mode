import { useLocalStorage } from './useLocalStorage.js';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage ("darkModeOn");
  
  useEffect(() => {
    isDarkMode 
    ? document.querySelector("body").classList.add("dark-mode") : document.querySelector("body").classList.remove("dark-mode");
  },[isDarkMode]);
  return [isDarkMode, setIsDarkMode];
};
