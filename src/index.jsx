import './index.css';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import RouterConfig from './config/Router';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  </React.StrictMode>
);
