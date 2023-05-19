import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>} />
      </Routes>
    </BrowserRouter>
);

