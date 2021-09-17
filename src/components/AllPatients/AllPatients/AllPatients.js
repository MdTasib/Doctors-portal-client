import React, { useEffect, useState } from 'react';
import Sidebar from '../../common/Sidebar/Sidebar';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('https://shrouded-escarpment-83874.herokuapp.com/appointments')
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [])

  return (
    <div className='d-flex w-100'>
      <div className="bg-info py-4">
        <Sidebar />
      </div>
      <div className="bg-light p-4 w-100">
        <h5 className='text-info'>All Patients</h5>
        <AppointmentDataTable appointments={appointments} />
      </div>
    </div>
  );
};

export default AllPatients;