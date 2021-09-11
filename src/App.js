import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/appointment'>
            <Appointment />
          </Route>
          <PrivateRoute path='/addDoctor'>
            <AddDoctor />
          </PrivateRoute>
          <PrivateRoute path='/allpatients'>
            <AllPatients />
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}