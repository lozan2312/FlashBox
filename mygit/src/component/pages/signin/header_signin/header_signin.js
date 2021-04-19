import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import './header_signin.css';
import AllSignIn from '../form_signin/allSignin';




class HeaderSignIn extends React.Component{
  render(){
    return(
        <div className="container">
          <Menu/>
          <Navbar/>
          <AllSignIn/>
      </div>
    )
  }
}
export default HeaderSignIn
