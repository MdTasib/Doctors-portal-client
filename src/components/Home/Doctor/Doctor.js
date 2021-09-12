import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({ doctor }) => {
    return (
        <div className="col-md-4 text-center">
            {
                doctor.image ? <img style={{ height: '300px' }} src={`data:image/png;base64,${doctor.image.img}`} />
                    :
                    <img style={{ height: '300px' }} className="img-fluid mb-3" src={`https://salty-plateau-71286.herokuapp.com/${doctor.img}`} alt="" />
            }
            <h4>{doctor.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faMailBulk} /> {doctor.email}</p>
        </div>
    );
};

export default Doctor;