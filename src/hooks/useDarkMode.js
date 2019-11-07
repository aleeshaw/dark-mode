import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const useDarkMode = (key, initialValue) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage (key, initialValue);
  const
}