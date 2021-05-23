import React from 'react';
import ListItems from './list_items';
import ColpsButn from './collapseButton';
import './navbar.css'


class Navbar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav id="mynavbar" className="navbar navbar-expand-xl navbar-dark">
      <a class="navbar-brand col-2" href="/">
        <img src="/img/logo/logoo1.png" alt="logo"/>
      </a>
      <ColpsButn/>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
        <ListItems data={this.props.nav.Navbar}/>
          </div>
      </nav>
    )
  }
}
export default Navbar
