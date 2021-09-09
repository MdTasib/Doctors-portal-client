import React from 'react';
import Navbar from '../../common/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './header.css';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
  return (
    <div className='header-container'>
      <Navbar />
      <HeaderMain />
      <BusinessInfo />
    </div>
  );
};

export default Header;