import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import Title from '../../../general/title/title';
import TrackBox from './track_box/track_box';
import './header_home.css';

class HeaderHome extends React.Component{
  render(){
    return(
      <div className="bg-img">
        <div id="header" className="container">
          <Menu/>
          <Navbar/>
          <Title sclass="sloganhome" id="logohead" logo_head="Flash Box" slogan="Express Courier Services"/>
          <TrackBox/>
        </div>
      </div>
    )
  }
}
export default HeaderHome
