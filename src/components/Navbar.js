import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return (
            <div>
            <div className="ui secondary vertical pointing menu" id="sidebarMenu">
  <NavLink to="/" className="item">
    Levain Doughnuts App
  </NavLink>
  <NavLink to="/products" className="item">
    <i className="shopping basket big icon"></i>Products
  </NavLink>
  <NavLink to="/customers" className="item">
  <i className="users big icon"></i>Customers
  </NavLink>
  <NavLink to="/delivery" className="item">
  <i className="truck big icon"></i> Delivery
  </NavLink>
  <NavLink to="/orders" className="item">
  <i className="newspaper big icon"></i>Orders
  </NavLink>
  <NavLink to="/production" className="item">
    <i className="chart line big icon"></i>Production
  </NavLink>
  </div>
            </div>
        )
    }
}

export default Navbar;