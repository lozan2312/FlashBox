import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../parts/footer/footer.js';
import Content from './content/content';
import HeaderHome from './header_home/header_home';
import './home.css';


class Home extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/home')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length===0)
        return (<p>ops</p>);
    return(
      <div id="home">
          <HeaderHome header={this.state.data.Header}/>
          <Content data={this.state.data.Content}/>
          <Footer  data={this.state.data.Header}/>
     </div>
      );
    }
  }

export default Home
