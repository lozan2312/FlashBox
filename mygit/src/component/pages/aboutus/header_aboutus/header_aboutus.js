import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import Title from '../../../general/title/title';
import './header_aboutus.css';
import Carousela from '../../../general/carousela/carousela';
import CarouselData from './carousel_data'

class HeaderAbout extends React.Component{
  render(){
    return(
      <div className="bga-img">
        <div id="header" className="container">
          <Carousela json={CarouselData}/>
          <Menu/>
          <Navbar/>
          <Title sclass="abouthead" id="logoheading" logo_head="Flash Box" slogan="About Us"/>
        </div>
      </div>
    )
  }
}
export default HeaderAbout
