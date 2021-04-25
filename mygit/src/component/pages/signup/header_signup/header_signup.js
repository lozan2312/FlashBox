import React from 'react';
import Heading from '../../contactus/header_contactus/heading/heading'
import Navbar from '../../../general/navbar/navbar';
import Menu from '../../../general/menu_top/menu';


class HeaderSignUp extends React.Component{
  render(){
    return(
      <div className="container">
      <Menu/>
      <Navbar/>
      <Heading heading="Welcome to Flash Box"
      span="Sign Up To Enjoy Our Express Services!"/>
      </div>
    )
  }
}
export default HeaderSignUp
