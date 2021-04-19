import React from 'react';
import './menu.css';
import {MenuItemLeft} from './menu_listleft';
import MenuItemRight from './menu_listright';


class Menu extends React.Component{
  render(){
    return(
      <div class="topmenu col-12">
        <nav className="navbar navbar-expand-xl">
          <ul className="navbar-nav menuleft col-9">
          {MenuItemLeft.map((item,index) => {
            return(
              <li key={index} className="nav-item">
                <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>
                <span className="pl-2">{item.name}</span>
                </a>
              </li>)
          })}
          </ul>
          <ul className="navbar-nav menuright col-3 justify-content-end">
          {MenuItemRight.map((item,index) => {
            return(
              <li key={index} className="nav-item">
                <a className={item.cName} href={item.url}>
                <i className={item.icon}></i>
                </a>
              </li>)
          })}
          </ul>
        </nav>
      </div>
    )
  }
}



export default Menu
