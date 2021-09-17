import React, { useState, useEffect } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-escarpment-83874.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <section className="doctors py-5">
            <div className="container">
                <h5 className="text-center text-info py-4">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;