import React from 'react';
import HeaderContact from './header_contactus/header_contactus';
import Footer from '../../parts/footer/footer';
import ContentContact from './contact_content/contact_content'
import './contact.css'

class Contact extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/contact')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length==0)
        return (<p>ops</p>);
    return(
      <div id="contact">
        <HeaderContact header={this.state.data.Header}/>
        <ContentContact data={this.state.data}/>
        <Footer data={this.state.data.Header}/>
      </div>
    )
  }
}
export default Contact
