import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/product">
          <Home/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
