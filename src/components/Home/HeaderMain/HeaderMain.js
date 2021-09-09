import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
  return (
    <main className='row w-100 d-flex align-items-center container m-auto' style={{ height: '90vh' }}>
      <div className="col-md-6 py-3">
        <h2>Your New Smile <br />Starts Here</h2>
        <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
        <button className="btn btn-info text-white">Get appointment</button>
      </div>
      <div className="col-md-6 py-3">
        <img className='img-fluid' src={chair} alt="" />
      </div>
    </main>
  );
};

export default HeaderMain;