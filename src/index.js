// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use o novo 'react-dom/client'
import App from './App';
import './index.css'; // CSS global, se necessário

const root = ReactDOM.createRoot(document.getElementById('root')); // Novo método para criar a raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
