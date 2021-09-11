import React, { useState, useEffect } from 'react';
import Sidebar from '../../common/Sidebar/Sidebar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = date => {
    setSelectedDate(date);
  }

  useEffect(() => {
    fetch('http://localhost:5000/appointmentsByDate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ date: selectedDate })
    })
      .then(response => response.json())
      .then(result => setAppointments(result))
      .catch(error => alert(error.message));
  }, [selectedDate])

  return (
    <section className='container-fluid bg-light bg-gradient'>
      <div className="row">
        <div className="col-md-3 bg-info  py-5">
          <Sidebar />
        </div>
        <div className="col-md-4 py-5 ps-4">
          <h5>Appointment</h5>
          <Calendar
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-5 py-5 pe-5">
          <AppointmentsByDate date={selectedDate} appointments={appointments} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;