import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import './header_review.css';
import Title from '../../../general/title/title';

class HeaderReview extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="bgr-img">
        <div id="header" className="container">
          <Menu menu={this.props.header}/>
          <Navbar nav={this.props.header}/>
            <Title sclass="abouthead" id="logoheading"
             logo_head="Flash Box" slogan="review"/>
        </div>
      </div>
    )
  }
}
export default HeaderReview
