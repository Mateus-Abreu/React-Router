// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importar CSS se necessário

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
