import React from 'react';

class Customers extends React.Component{
    render(){
        return (
            <div>
                <h4>Customers</h4>
                <hr></hr>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Basic Info</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
          <b>The Abhik</b>
          <p>Abhik Shrestha</p>
      </td>
      <td>abhikshrestha@gmail.com</td>
      <td>0406370076</td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }
}

export default Customers;