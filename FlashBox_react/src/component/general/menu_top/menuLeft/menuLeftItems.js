import React from 'react';
import MenuLeftItem from './menuLeftItem';


class MenuLeftItems extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if (!this.props.left){
      return ("oops")
    }
      const MenuLeftItems=this.props.left.map((jsonParts)=>
        <MenuLeftItem item={jsonParts}/>
      );
    return(
        <ul className="navbar-nav">{MenuLeftItems}</ul>
    )
  }
}

export default MenuLeftItems
