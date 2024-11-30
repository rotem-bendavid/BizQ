import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './features/Generics/NavBar';
import SingUpPage from './pages/SingUpPage';
import HomePage from './pages/HomePage';
import FilterBusinessPage from './pages/FilterBusinessPage';
import BackGround from './features/BackGround';
import LoginPage from './pages/Login';

function App() {
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
            <Route
              path='/SingUpPage/:userId?'
              exact
              component={SingUpPage}
            />
            <Route
              path='/FilterBusinessPage/:category?'
              exact
              component={FilterBusinessPage}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
