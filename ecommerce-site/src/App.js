import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { ProductClothing } from './components/ProductClothing';
import { ProductAssesories } from './components/ProductAssesories';
import { ProductElectronic } from './components/ProductElectronic';
import { ProductSale } from './components/ProductSale';
import ProductView from './components/ProductView';
function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/product/clothing">
         <ProductClothing/>
        </Route>
        <Route exact path="/product/assesories">
         <ProductAssesories/>
        </Route>
        <Route exact path="/product/electronics">
         <ProductElectronic/>
        </Route>
        <Route exact path="/product/sale">
         <ProductSale/>
        </Route>
        <Route exact path="/product/:id">
         <ProductView/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
