import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Customers from './components/Customers';
import Delivery from './components/Delivery';
import Orders from './components/Orders';
import Production from './components/Production';


class App extends React.Component{
    render(){
        return (
            <div className="">
            <Router>
            <div className="container">
            <div className="row">
            <div className="col">
            <Navbar></Navbar>
            </div>
            <div className="col">
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/customers" component={Customers} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/orders" component={Orders} />
            <Route path="/production" component={Production} />
            </div>
            </div>
            </div>
            </Router>
            </div>
        )
    }
}

export default App;