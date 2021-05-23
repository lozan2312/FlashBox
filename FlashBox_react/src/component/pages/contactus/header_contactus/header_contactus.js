import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import Heading from './heading/heading';
import './header_contactus.css';

class HeaderContact extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div id="header" className="container">
          <Menu menu={this.props.header}/>
          <Navbar nav={this.props.header}/>
          <Heading heading="Get in touch"
          span="Contact us,we'd love to hear from you."/>
        </div>
    )
  }
}
export default HeaderContact
