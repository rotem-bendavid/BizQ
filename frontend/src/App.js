import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './features/Generics/NavBar';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import FilteredBusinessesPage from './pages/FilteredBusinessesPage';
import Background from './features/Generics/Background';
import LoginPage from './pages/LoginPage';
import AppointmentPage from './pages/AppointmentPage';
import BusinessOwnerPage from './pages/BusinessOwnerPage';
import SchedulerPage from './pages/SchedulerPage';
import { getLocationByIP } from './api/Location';
import BusinessDetailsPage from './pages/BusinessDetailsPage';
import BusinessManagement from './pages/BusinessManagement';
import CancelAppointment from './pages/CancelAppointment';

function App() {
  useEffect(() => {
    getLocationByIP();
  }, []);
  return (
    <Router>
      <Background />
      <div
        className='app_page'
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <NavBar />
        <div
          className='pages_content'
          style={{ flex: 1, overflowY: 'auto', marginTop: '10vh' }}
        >
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/Login' exact component={LoginPage} />
            <Route path='/SchedulerPage' exact component={SchedulerPage} />
            <Route
              path='/BusinessDetails/:userId'
              component={BusinessDetailsPage}
            />
            <Route
              path='/BusinessManagement'
              exact
              component={BusinessManagement}
            />
            <Route path='/SignUp/:userId?' exact component={SignUpPage} />
            <Route path='/BusinessOwner/:id' component={BusinessOwnerPage} />
            <Route
              path='/FilterBusiness/:category'
              component={FilteredBusinessesPage}
            />
            <Route
              path='/FilterBusiness/all'
              component={FilteredBusinessesPage}
            />
            <Route path='/Appointment/:id' exact component={AppointmentPage} />
            <Route
              path='/CancelAppointment/:appointmentId'
              exact
              component={CancelAppointment}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
