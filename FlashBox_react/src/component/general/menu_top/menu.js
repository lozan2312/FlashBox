import React from 'react';
import ReactDOM from 'react-dom';
import './menu.css';
import MenuRightItems from './menuRight/menuRightItems';
import MenuLeftItems from './menuLeft/menuLeftItems';

class Menu extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="topmenu col-13">
        <nav className="navbar navbar-expand-xl">
          <MenuLeftItems  left={this.props.menu.MenuLeft}/>
          <MenuRightItems right={this.props.menu.MenuRight}/>
        </nav>
      </div>
    )
  }
}



export default Menu
