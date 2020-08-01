import React from 'react';
import {NavLink} from 'react-router-dom';

class ProductNavbar extends React.Component{
    render(){
        return (
            <div>
            <div className="ui secondary horizontal pointing menu">
  <NavLink to="/products" className="item">
    <i className="grey shopping bag big icon"></i>All products
  </NavLink>
  <NavLink to="add/product" className="item">
    <i className="grey plus big icon"></i>Add product
  </NavLink>
  <NavLink to="edit/:productID" className="item">
    <i className="grey edit bag big icon"></i>Edit product
  </NavLink>
  </div>
            </div>
        )
    }
}

export default ProductNavbar;