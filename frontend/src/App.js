import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessPage from './pages/BusinessPage';
import HomePage from './pages/HomePage';
import AllBusinessPage from './pages/AllBusinessPage';

function App() {
  return (
    <Router>
      <div className='app_page'>
        <Switch>
          <Route path='/' exact>
            <HomePage></HomePage>
          </Route>
          <Route path='/BusinessPage/:userId?' exact>
            <BusinessPage></BusinessPage>
          </Route>
          <Route path='/AllBusinessPage/:category?' exact>
            <AllBusinessPage></AllBusinessPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
