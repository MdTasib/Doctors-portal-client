import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <Link className="navbar-brand text-secondary" to="/">Doctors Portal</Link>
      <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-secondary ms-4 active" aria-current="page" to="/">Home</Link>
          <Link className="nav-link text-secondary ms-4" to="/allpatients">Patient</Link>
          <Link className="nav-link text-secondary ms-4" to="/dashboard">Dashboad</Link>
          <Link className="nav-link text-secondary ms-4" to="/dashboard">Admin</Link>
          <Link className="nav-link text-secondary ms-4" to="/appointment">Appointment</Link>
          <Link className="nav-link text-secondary ms-4" to="#">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;