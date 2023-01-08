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
        <li><Link to="/" className="new-btn">Home</Link></li>
        <li><Link to="list" className="new-btn">Locais</Link></li>
        <li><Link to="/register" className="new-btn">Cadastrar</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
