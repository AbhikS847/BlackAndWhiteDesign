import React from 'react';
import '../App.css';

class Products extends React.Component{
    render(){
        return (
            <div className="App">
                <h4>Products</h4>
                <hr />
                <div className="" id="boxes">
                <h5><b>Details</b></h5>
                <br></br>
                <p><b>Name</b></p>
                <div className="ui fluid icon input">
  <input type="text" placeholder="Product name goes here..." />
    </div>
    <br></br>
    <p><b>Method</b></p>
    <div className="ui form">
  <div className="field">
    <label>Here are the preperation steps</label>
    <textarea placeholder="Example, pour one cup flour..."></textarea>
  </div>
  </div>
                </div>
                <hr />
                <table class="ui celled table">
  <thead>
    <tr><th>Ingridient</th>
    <th>Weight(gm)</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="Name">Salt</td>
      <td data-label="Age">500</td>
    </tr>
    <tr>
      <td data-label="Name">Butter</td>
      <td data-label="Age">26000</td>
    </tr>
    <tr>
      <td data-label="Name">Chocolate</td>
      <td data-label="Age">5000</td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }
}

export default Products;