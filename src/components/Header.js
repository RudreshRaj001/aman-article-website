import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navbar from './Navbar';

// Import your header background image
import headerImage from '../assets/header-image.jpg'; // Replace with your image path

function Header() {
  const headerStyle = {
    backgroundImage: `url(${headerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1 className="header-title">Article Website</h1>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
