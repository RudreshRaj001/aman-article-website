import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import './Navbar.css';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      <button className="nav-button" onClick={openLogin}>Login</button>
      <button className="nav-button" onClick={openSignup}>Signup</button>

      <Modal isOpen={isLoginOpen} onClose={closeLogin}>
        <Login onClose={closeLogin} />
      </Modal>

      <Modal isOpen={isSignupOpen} onClose={closeSignup}>
        <Signup onClose={closeSignup} />
      </Modal>
    </nav>
  );
}

export default Navbar;
