import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PermanentDrawerLeft from './Components/Home/Slidebar';
import Crousel from './Components/Home/Crousel';

function App() {
  return (
    <>
      <div className="appjs d-flex">
        <Router>
          <PermanentDrawerLeft />
          <Switch>
            <Route exact path="/">
              <Crousel />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
