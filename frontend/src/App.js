import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessPage from './pages/BusinessPage';
import HomePage from './pages/HomePage';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
