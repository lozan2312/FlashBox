import React from 'react';
import HeaderSignIn from './header_signin/header_signin';
import './signin.css'

class SignIn extends React.Component {
  render(){
    return(
      <div className="bgs-img">
        <div className="backg">
        <HeaderSignIn/>
        </div>
     </div>
      );
    }
  }

export default SignIn
