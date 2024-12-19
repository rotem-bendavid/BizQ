import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './features/Generics/NavBar';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import FilterBusinessPage from './pages/FilterBusinessPage';
import BackGround from './features/BackGround';
import LoginPage from './pages/LoginPage';
import AppointmentPage from './pages/AppointmentPage';
import BusinessOwnerPage from './pages/BusinessOwnerPage';
import SchedulerPage from './pages/SchedulerPage';
import { getLocationByIP } from './api/Location';

function App() {
  useEffect(() => {
    getLocationByIP();
  }, []);
  return (
    <Router>
      <BackGround />
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

            <Route path='/SignUp/:userId?' exact component={SignUpPage} />
            <Route
              path='/FilterBusiness/:category?'
              exact
              component={FilterBusinessPage}
            />
            <Route
              path='/BusinessOwner/:id'
              exact
              component={BusinessOwnerPage}
            />
            <Route path='/appointment' exact component={AppointmentPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
