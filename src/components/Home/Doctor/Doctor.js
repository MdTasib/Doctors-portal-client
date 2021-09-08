import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({ doctor }) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={doctor.img} alt="" />
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> {doctor.number}</p>
        </div>
    );
};

export default Doctor;