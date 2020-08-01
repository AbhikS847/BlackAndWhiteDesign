import React from 'react';

class Delivery extends React.Component{
    render(){
        return (
            <div>
                <h4>Delivery</h4>
                <hr></hr>
                <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Customer</th>
      <th scope="col">Delivery times</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
          <b>Levain Doughnuts</b>
          <p>Anthony Randello - Jahn</p>
          <a href="https://www.google.com/maps/dir/-37.8698553,144.9942312/levain+doughnuts+location/@-37.9188518,144.9634135,12z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x6ad66c73982a8123:0xc0fcc42e06070b08!2m2!1d145.073696!2d-37.967774">142 Centre Dandenong Rd, Cheltenham VIC 3192</a>
      </td>
      <td>6:00 AM to 9:00 AM</td>
      <td>50</td>
    </tr>
  </tbody>
</table>
            </div>
        )
    }
}

export default Delivery;