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
import Sidebar from './components/Sidebar';
import Totaluser from './components/Totaluser';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavigationBar />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/login/:username/:pass">
          <Login/>
        </Route>
        <Route exact path="/search/:search">
          <NavigationBar />
          <Search />
          <Footer />
        </Route>
        <Route exact path="/product/clothing">
          <NavigationBar />
          <ProductClothing />
          <Footer />
        </Route>
        <Route exact path="/product/assesories">
          <NavigationBar />
          <ProductAssesories />
          <Footer />
        </Route>
        <Route exact path="/product/electronics">
          <NavigationBar />
          <ProductElectronic />
          <Footer />
        </Route>
        <Route exact path="/product/sale">
          <NavigationBar />
          <ProductSale />
          <Footer />
        </Route>
        <Route exact path="/product/:id">
          <NavigationBar />
          <ProductView />
          <Footer />
        </Route>
        <Route exact path="/dashboard">
          <div className="d-flex">
            <Sidebar />
            <Dashboard />
          </div>
        </Route>
        <Route exact path="/dashboard/total-products">
          <div className="d-flex">
            <Sidebar />
            <TotalProducts />
          </div>

        </Route>
        <Route exact path="/dashboard/total-user">
          <div className="d-flex">
            <Sidebar />
            <Totaluser />
          </div>

        </Route>
      </Switch>
    </Router>

  );
}

export default App;
