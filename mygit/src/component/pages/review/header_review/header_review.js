import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import './header_review.css';
import Title from '../../../general/title/title';

class HeaderReview extends React.Component{
  render(){
    return(
      <div className="bgr-img">
        <div id="header" className="container">
          <Menu/>
          <Navbar/>
            <Title sclass="abouthead" id="logoheading"
             logo_head="Flash Box" slogan=""/>
        </div>
      </div>
    )
  }
}
export default HeaderReview
