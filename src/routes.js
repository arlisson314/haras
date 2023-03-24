import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Galeria from './pages/Galeria';
import Home from './pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
