import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import Title from '../../../general/title/title';
import './header_transaction.css';



class HeaderSignIn extends React.Component{
  constructor(props) {
   super(props);
 }
  render(){
    return(
        <div className="container">
          <Menu menu={this.props.header}/>
          <Navbar nav={this.props.header}/>
          <Title sclass="abouthead" id="logoheading" logo_head="Flash Box" slogan="Transaction"/>

        </div>
    )
  }
}
export default HeaderSignIn
