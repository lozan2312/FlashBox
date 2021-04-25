import React from 'react';
import MenuRightItem from './menuRightItem';
import MenuDataRight  from './menu_listright';

class MenuRightItems extends React.Component{
  render(){
      const MenuRightItems=MenuDataRight.map((jsonParts)=>(
        <MenuRightItem item={jsonParts}/>
      ));
    return(
        <ul className="navbar-nav">{MenuRightItems}</ul>
    )
  }
}

export default MenuRightItems
