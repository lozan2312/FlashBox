import React from 'react';
import MenuLeftItem from './menuLeftItem';
import MenuDataLeft  from './menu_listleft';

class MenuLeftItems extends React.Component{
  render(){
      const MenuLeftItems=MenuDataLeft.map((jsonParts)=>(
        <MenuLeftItem item={jsonParts}/>
      ));
    return(
        <ul className="navbar-nav">{MenuLeftItems}</ul>
    )
  }
}

export default MenuLeftItems
