import React from 'react';
import {NavLink} from 'react-router-dom';

class EditProduct extends React.Component{
    render(){
        return(
            <div>
              <h4>Edit product</h4>
              <NavLink to="/products" className="item">
    <i className="grey arrow alternate circle left big icon"></i>back to All Products
  </NavLink>
            </div>
        )
    }
}

export default EditProduct;