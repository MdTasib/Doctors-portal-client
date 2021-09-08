import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
  return (
    <main className='row'>
      <div className="col-md-4 offset-md-1">

      </div>
      <div className="col-md-6">
        <img className='img-fluid' src={chair} alt="" />
      </div>
    </main>
  );
};

export default HeaderMain;