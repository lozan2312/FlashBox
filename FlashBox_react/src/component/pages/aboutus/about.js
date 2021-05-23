import React from 'react';
import Footer from '../../parts/footer/footer.js';
import HeaderAbout from './header_aboutus/header_aboutus';
import ContentAbout from './content_about/content_about';
import './about.css'



class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/about')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length==0)
        return (<p>ops</p>);
    return(
      <div id="about">
      <HeaderAbout header={this.state.data.Header}/>
      <ContentAbout data={this.state.data}/>
      <Footer data={this.state.data.Header}/>

     </div>
      );
    }
  }

export default AboutUs
