import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import Heading from './heading/heading';
import './header_contactus.css';

class HeaderContact extends React.Component{
  render(){
    return(
      <div className="bgc-img">
        <div id="header" className="container">
          <Menu/>
          <Navbar/>
          <Heading heading="Get in touch"
          span="Contact us,we'd love to hear from you."/>
        </div>
      </div>
    )
  }
}
export default HeaderContact
