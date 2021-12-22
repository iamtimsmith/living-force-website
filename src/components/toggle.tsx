import React, { useState, useEffect } from 'react';
declare const window: any;

export default () => {
  const [theme, setTheme] = useState('light');

  const handleClick = () => {
    switch (theme) {
      case 'light':
        window.__setPreferredTheme('dark');
        setTheme('dark');
        break;
      case 'dark':
        window.__setPreferredTheme('light');
        setTheme('light');
        break;
      default:
        console.log('Default was used.');
        break;
    }
  };

  // Get theme on load
  useEffect(() => {
    setTheme(window.__theme);
  }, []);

  return (
    <button
      className='site-toggle'
      onClick={() => handleClick()}
      aria-label={`Toggle Theme to ${theme === 'light' ? 'dark' : 'light'}`}
      title={`Go to the ${theme === 'light' ? 'dark' : 'light'} side`}
    >
      {theme === 'light' ? '#' : '$'}
    </button>
  );
};
