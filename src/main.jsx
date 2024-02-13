import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '/home/Przems0n711/react-files/src/contexts/ThemeContext/index.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
