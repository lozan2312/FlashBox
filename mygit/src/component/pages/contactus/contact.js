import React from 'react';
import HeaderContact from './header_contactus/header_contactus';
import Footer from '../../parts/footer/footer';
import ContentContact from './contact_content/contact_content'


class Contact extends React.Component{
  render(){
    return(
      <div>
        <HeaderContact/>
        <ContentContact/>
        <Footer/>
      </div>
    )
  }
}
export default Contact
