import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <Link className="navbar-brand text-secondary" to="#">Doctors Portal</Link>
      <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-secondary ms-4 active" aria-current="page" to="#">Home</Link>
          <Link className="nav-link text-secondary ms-4" to="#">About</Link>
          <Link className="nav-link text-secondary ms-4" to="#">Dental Services</Link>
          <Link className="nav-link text-secondary ms-4" to="#">Reviews</Link>
          <Link className="nav-link text-secondary ms-4" to="#">Blog</Link>
          <Link className="nav-link text-secondary ms-4" to="#">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;