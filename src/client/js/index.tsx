import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'

const createApp = () => {
  const root = createRoot(document.querySelector('[data-app]'))
  root.render(<App />);
}

createApp();