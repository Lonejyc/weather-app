import { useState } from 'react';
import sun from '../assets/images/Sun-little.svg';
import moon from '../assets/images/Moon-little.svg';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };

return (
    <div className='theme-switch' onClick={toggleTheme}>
        <input
            type="checkbox"
            name="theme"
            className="theme-toggle"
            checked={isDarkMode}
            readOnly
        />
        <img
            src={isDarkMode ? moon : sun}
            alt="theme icon"
            className="theme-icon"
        />
    </div>
);
};

export default ThemeSwitcher;