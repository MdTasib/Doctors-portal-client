import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments, date }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 text-info">
          <h4>Appointments : {appointments.length}</h4>
        </div>
        <div className="col-md-4 text-end">
          <h6>
            {`${date.getMonth()} - ${date.getDate()} - ${date.getFullYear()}`}
          </h6>
        </div>
      </div>

      {
        appointments.length ?
          <AppointmentShortList appointments={appointments} ></AppointmentShortList>
          :
          <div className="p-5">
            <h4 className="lead text-center">No Appointments for this Date</h4>
          </div>
      }
    </div>
  );
};

export default AppointmentsByDate;