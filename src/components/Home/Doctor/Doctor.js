import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import doctorImg from '../../../images/1.png';

const Doctor = ({ doctor }) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={doctor.img ? doctor.img : doctorImg} alt="" />
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faMailBulk} /> {doctor.email}</p>
        </div>
    );
};

export default Doctor;