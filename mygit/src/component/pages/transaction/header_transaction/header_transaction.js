import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import './header_transaction.css';



class HeaderSignIn extends React.Component{
  render(){
    return(
      <div className="bgt-img">
        <div id="header" className="container">
          <Menu/>
          <Navbar/>
        </div>
      </div>
    )
  }
}
export default HeaderSignIn
