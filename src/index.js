import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './routes/categories/Category';
import About from './routes/about/About';
import App from './App';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
         
         <Route path="/" element={<App />} />
         <Route path="categories" element={<Category />} />
         <Route path="about" element={<About />} />
     </Routes>
  </BrowserRouter>
);

