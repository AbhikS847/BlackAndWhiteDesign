import React from 'react';
import levainLogo_White from '../assets/levainLogo_White.png';

class Footer extends React.Component{
    render(){
        return(
            <div className="">
                        <div class="ui inverted segment">
  <div className="ui inverted secondary menu">
  <div className="container">
      <div className="row">
      <div className="col">
      <p className="text-center" id=""><b>Copyright Levain Doughnuts, 2020</b><br></br><br></br>
      <img src = {levainLogo_White} alt="Levain Logo"></img>
      </p>
      </div>
      </div>
  </div>
  </div>
</div>
            </div>
        )
    }
}

export default Footer;