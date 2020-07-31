import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return (
            <div>
            <div className="ui secondary vertical pointing menu">
  <NavLink to="/" className="item">
    Levian Doughnuts IMS
  </NavLink>
  <NavLink to="/products" className="item">
    Products
  </NavLink>
  <NavLink to="/customers" className="item">
    Customers
  </NavLink>
  <NavLink to="/delivery" className="item">
    Delivery
  </NavLink>
  <NavLink to="/orders" className="item">
    Orders
  </NavLink>
  <NavLink to="/production" className="item">
    Production
  </NavLink>
  </div>
            </div>
        )
    }
}

export default Navbar;