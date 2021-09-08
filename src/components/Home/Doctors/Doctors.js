import React from 'react';
import Doctor from '../Doctor/Doctor';
import doctor1 from '../../../images/1.png';
import doctor2 from '../../../images/2.png';

const doctors = [
    {
        id: 1,
        img: doctor1,
        number: '+880-188-934789',
        name: 'Dr. Myles'
    },
    {
        id: 2,
        img: doctor2,
        number: '+880-122-368783',
        name: 'Dr. Naresh'
    },
    {
        id: 3,
        img: doctor1,
        number: '+880-188-934789',
        name: 'Dr. Myles'
    }
]

const Doctors = () => {
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