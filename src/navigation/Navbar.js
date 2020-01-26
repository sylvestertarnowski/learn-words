import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/browse">
          <li>Browse</li>
        </Link>
        <Link to="/learn">
          <li>Learn</li>
        </Link>
        <Link to="/admin">
          <li>Admin</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
