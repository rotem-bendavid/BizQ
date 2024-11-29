import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './features/Generics/NavBar';
import BusinessPage from './pages/BusinessPage';
import HomePage from './pages/HomePage';
import BackGround from './features/BackGround';
import LoginPage from './pages/Login';

function App() {
  return (
    <Router>
      <BackGround/>
      <div className='app_page' style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <NavBar />
        <div className='pages_content' style={{ flex: 1, overflowY: 'auto', marginTop: '10vh' }}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Login" exact component={LoginPage} />
            <Route path="/BusinessPage/:userId?" exact component={BusinessPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
