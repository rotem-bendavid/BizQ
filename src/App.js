import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessPage from './pages/BusinessPage';

function App() {
  return (
    <Router>
      <div className='app_page'>
        <Switch>
          <Route path='/' exact></Route>
          <Route path='/BusinessPage/:userId?' exact>
            <BusinessPage></BusinessPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
