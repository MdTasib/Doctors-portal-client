import React from 'react';

const AppointmentShortList = ({ appointments }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary" scope="col">Name</th>
          <th className="text-secondary" scope="col">Phone</th>
          <th className="text-secondary" scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {
          appointments.map((appointment, index) =>

            <tr key={appointment._id}>
              <td>{appointment.name}</td>
              <td>{appointment.service}</td>
              <td>{appointment.number}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default AppointmentShortList;