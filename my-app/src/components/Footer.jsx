import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink></li>
      <li className="nav-item"><NavLink to="/products" className="nav-link px-2 text-muted">Product</NavLink></li>
      <li className="nav-item"><NavLink to="/about" className="nav-link px-2 text-muted">About</NavLink></li>
      <li className="nav-item"><NavLink to="/contact" className="nav-link px-2 text-muted">Contact</NavLink></li>
     
    </ul>
    <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
  </footer>
            
        </>
    );
};

export default Footer;