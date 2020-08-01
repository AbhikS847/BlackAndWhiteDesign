import React from 'react';

class Home extends React.Component{
    render(){
        return (
            <div>
                <h4 className="text-center">Home</h4>
                <br></br>
                <div className="ui form success">
  <div className="field">
    <label>E-mail</label>
    <input type="email" placeholder="eg:abhikshrestha@gmail.com" />
  </div>
  <div className="field">
    <label>Password</label>
    <input type="password" placeholder="Enter your password here" />
  </div>
  <div className="fluid ui black button">Sign In</div>
  <div className="ui blue message">
    <div className="header text-center">You need to be signed in to continue</div>
    <p className="text-center">Note: Only for use by Levian staff.</p>
  </div>
</div>
            </div>
        )
    }
}

export default Home;