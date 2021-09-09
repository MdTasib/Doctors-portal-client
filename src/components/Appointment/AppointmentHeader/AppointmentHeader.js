import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './appointmentheader.module.css';

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <header className={styles.appointment_header}>
      <main className='row w-100 d-flex align-items-center container m-auto' style={{ height: '90vh' }}>
        <div className="col-md-6 py-3">
          <h2>Appointment</h2>
          <Calendar
            onChange={handleDateChange}
            value={new Date()}
          />
        </div>
        <div className="col-md-6 py-3">
          <img className='img-fluid' src={chair} alt="" />
        </div>
      </main>
    </header>
  );
};

export default AppointmentHeader;