import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo">
            <img className='logo-pic' src={logo} width={70} alt="Logo"/>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/About" onClick={closeMenu}>About</Link></li>
              <li><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/Blogs" onClick={closeMenu}>Blogs</Link></li>
            </ul>
          </div>

          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;



