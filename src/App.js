import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Customers from './components/Customers';
import Delivery from './components/Delivery';
import Orders from './components/Orders';
import Production from './components/Production';
import Footer from './components/Footer';
import levainLogo_White from "./assets/levainLogo_White.png";
import './App.css';

class App extends React.Component{
    render(){
        return (
            <div className="App">
            <div class="ui inverted segment">
  <div className="ui inverted secondary menu">
  <a href="https://levain.com.au/" className="item">
  <h2 className="" id="brandFont"><img src={levainLogo_White} width="120px" alt="Levain logo"></img></h2>
  </a>
  <div className="right menu">
  <a href="https://levain.com.au/contact" className="item" style={{fontFamily:"Roboto"}}><i className="at envelope big icon"></i>Contact</a>
  </div>
  </div>
</div>
            <Router>
            <div className="container">
            <div className="row">
            <div className="col-auto">
            <Navbar></Navbar>
            </div>
            <div className="col">
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/customers" component={Customers} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/orders" component={Orders} />
            <Route path="/production" component={Production} />
            <Route path="/add/product" component={AddProduct}></Route>
            <Route path="/edit/:productID" component={EditProduct}></Route>
            </div>
            </div>
            </div>
            <br></br>
            <Footer></Footer>
            </Router>
            </div>
        )
    }
}

export default App;