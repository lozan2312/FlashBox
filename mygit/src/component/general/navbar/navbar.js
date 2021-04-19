import React from 'react';
import JsonList from './jsonList';
import ListItems from './list_items';
import ColpsButn from './collapseButton';
import './navbar.css'


class Navbar extends React.Component{
  render(){
    return(
      <nav id="mynavbar" className="navbar navbar-expand-xl navbar-dark">
      <a class="navbar-brand col-2" href="home.html">
        <img src="/img/logo/logoo1.png" alt="logo"/>
      </a>
      <ColpsButn/>
        <ListItems/>
      </nav>
    )
  }
}
export default Navbar
