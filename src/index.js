import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import './index.css';

import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
