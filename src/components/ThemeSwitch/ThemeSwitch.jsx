import React, { useContext } from 'react';
import './ThemeSwitch.scss';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`theme-switch ${theme === 'dark' ? 'fill' : ''}`}
      onClick={toggleTheme}
    >
      <svg
        className="moon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <defs></defs>
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
    </button>
  );
};

export default ThemeSwitch;
