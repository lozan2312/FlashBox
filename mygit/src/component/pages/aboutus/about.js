import React from 'react';
import Footer from '../../parts/footer/footer.js';
import HeaderAbout from './header_aboutus/header_aboutus';
import ContentAbout from './content_about/content_about';
import './about.css'



class AboutUs extends React.Component {
  render(){
    return(
      <div id="about">
      <HeaderAbout/>
      <ContentAbout/>
      <Footer/>

     </div>
      );
    }
  }

export default AboutUs
