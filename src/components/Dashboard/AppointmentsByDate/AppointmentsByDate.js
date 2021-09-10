import React from 'react';

const AppointmentsByDate = ({ appointments, date }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 text-info">
          <h4>Appointments : {appointments.length}</h4>
        </div>
        <div className="col-md-6 text-end">
          <h6>
            {`${date.getMonth()} - ${date.getDate()} - ${date.getFullYear()}`}
          </h6>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Service</th>
            <th scope="col">Number</th>
          </tr>
        </thead>
        <tbody>
          {
            appointments.length ?
              appointments.map(appointment => (
                <tr key={appointment._id}>
                  <td>{appointment.name}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.number}</td>
                </tr>
              ))
              :
              <h5 className='py-4 text-danger'>No Appointments For This Date</h5>
          }
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsByDate;