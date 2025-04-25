import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Integrante from '../pages/IntegrantePage';
import React from 'react';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integrante/:id" element={<Integrante />} />
    </Routes>
  );
}

export default RouterConfig;
