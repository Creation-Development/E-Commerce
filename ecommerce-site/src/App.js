import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { ProductClothing } from './components/ProductClothing';
import { ProductAssesories } from './components/ProductAssesories';
import { ProductElectronic } from './components/ProductElectronic';
import { ProductSale } from './components/ProductSale';
import ProductView from './components/ProductView';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import TotalProducts from './components/TotalProducts';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <Home/>
          <Footer/>
        </Route>
        <Route exact path="/search/:search">
          <Search/>
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
        <Route exact path="/dashboard">
         <Dashboard/>
        </Route>
        <Route exact path="/dashboard/total-products">
         <TotalProducts/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
