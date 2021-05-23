import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import Title from '../../../general/title/title';
import './header_aboutus.css';


class HeaderAbout extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="bga-img">
        <div id="headerabout" className="container">
          <Menu menu={this.props.header}/>
          <Navbar nav={this.props.header}/>
          <Title sclass="abouthead" id="logoheading" logo_head="Flash Box" slogan="About Us"/>
        </div>
      </div>
    )
  }
}
export default HeaderAbout
