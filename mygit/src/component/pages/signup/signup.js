import React from 'react';
import Navbar from '../../general/navbar/navbar';
import Footer from '../../parts/footer/footer';
import ContentAbout from '../aboutus/content_about/content_about';
import './signup.css';


class SignUp extends React.Component {
  render(){
    return(
      <div id="signup">
      <div>
      <Navbar/>
      <Footer/>
      </div>
     </div>
      );
    }
  }

export default SignUp
