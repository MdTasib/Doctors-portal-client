import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <Navbar />
      <HeaderMain />
    </div>
  );
};

export default Header;