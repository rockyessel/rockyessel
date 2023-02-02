import React from 'react';
import { theme } from './theme';

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeContext = React.createContext({});

export const WebThemeSwitcherProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = React.useState('');

  React.useEffect(() => {}, [theme]);

  const handleThemeSwitch = () => {
    setTheme('light');
    return theme;
  };

  return (
    <ThemeContext.Provider value={{ handleThemeSwitch, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
