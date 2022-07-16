import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grupo from './components/Grupo';
import Assunto from './components/Assunto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/grupo" element={<Grupo />} />
      <Route path="/assunto" element={<Assunto />} />
    </Routes>
  </BrowserRouter>
);