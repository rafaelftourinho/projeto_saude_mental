import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/">DevAjuda</Link>
      </h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Cadastrar</Link></li>
        <li><Link to="list">Locais</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
