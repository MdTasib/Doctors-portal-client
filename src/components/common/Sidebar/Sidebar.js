import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserMd, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch('https://shrouded-escarpment-83874.herokuapp.com/isDoctor', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(response => response.json())
      .then(data => setIsDoctor(data))
      .catch(error => alert(error.message));
  }, []);

  return (
    <div className="sidebar d-flex flex-column justify-content-between col-md-2 px-4" style={{ height: "85vh" }}>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        {
          isDoctor &&
          <div>
            <li>
              <Link to="/appointment" className="text-white">
                <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
              </Link>
            </li>
            <li>
              <Link to="/allpatients" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/prescriptions" className="text-white">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link to="/addDoctor" className="text-white">
                <FontAwesomeIcon icon={faUserMd} /> <span>Doctor</span>
              </Link>
            </li>
            <li>
              <Link to="/doctor/setting" className="text-white" >
                <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
              </Link>
            </li>
          </div>
        }
      </ul>
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;