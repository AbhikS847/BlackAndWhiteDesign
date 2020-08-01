import React from 'react';
import {NavLink} from 'react-router-dom';

class AddProduct extends React.Component{
    constructor(props){
        super(props)
        
        this.onProductName = this.onProductName.bind(this);
        this.onProductMethod = this.onProductMethod.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name:"",
            product_method:""
        }
    }

    onProductName = (event) => {
        this.setState({
            product_name:event.target.value
        })
    }

    onProductMethod = (event) => {
        this.setState({
            product_method:event.target.value
        })
    }

    onSubmit = (event) =>{
        event.preventDefault();
        console.log("Product added!");
        console.log(`Product name: ${this.state.product_name}`);
        console.log(`Product method: ${this.state.product_method}`);

        this.setState({
            product_name:"",
            product_method:""
        })
    }

    render(){
        return(
            <div>
              <h4>Add product</h4>
              <NavLink to="/products" className="item">
    <i className="grey arrow alternate circle left big icon"></i>back to All Products
  </NavLink>
  <div className="" id="boxes">
  <br></br>
                <h5><b>Details</b></h5>
                <br></br>
                <div className="ui form">
                <p><b>Name</b></p>
                <div className="ui fluid icon input" value={this.state.product_name} onChange={this.onProductName}>
  <input type="text" placeholder="Product name goes here..." />
    </div>
    <br></br>
    <p><b>Method</b></p>
  <div className="field">
    <label>Here are the preperation steps</label>
    <textarea placeholder="Example, pour one cup flour..." value={this.state.product_method} onChange={this.onProductMethod}></textarea>
  </div>
  <button class="fluid blue ui button" onClick={this.onSubmit}>Add product</button>
  </div>
                </div>
            </div>
        )
    }
}

export default AddProduct;