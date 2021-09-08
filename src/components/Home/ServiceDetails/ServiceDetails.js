import React from 'react';

const ServiceDetails = ({ service }) => {
  return (
    <div className='col-md-4'>
      <div className="card text-center border-0">
        <img src={service.image} className='m-auto' alt="..." height={70} width={70} />
        <div className="card-body">
          <h6 className="card-title">{service.title}</h6>
          <small className="card-text text-secondary">{service.description}</small>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;