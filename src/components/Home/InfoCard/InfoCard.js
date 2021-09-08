import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 py-2">
      <div className={`card bg-${info.background} text-white h-100`}>
        <div className="row d-flex align-items-center g-0">
          <div className="col-md-4 fs-1 ps-3">
            <FontAwesomeIcon icon={info.icon} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{info.title}</h6>
              <small className="card-text">{info.description}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;