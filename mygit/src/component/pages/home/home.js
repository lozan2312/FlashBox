import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../parts/footer/footer.js';
import Content from './content/content';
import HeaderHome from './header_home/header_home';
import './home.css';


class Home extends React.Component {
  render(){
    return(
      <div id="home">
        <div className="backg">
          <HeaderHome/>
          <Content/>
          <Footer/>
        </div>
     </div>
      );
    }
  }

export default Home
