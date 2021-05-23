import React from 'react';
import ReactDOM from 'react-dom';
import MenuRightItem from './menuRightItem';
import SearchBox from '../../search/search'

class MenuRightItems extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if (!this.props.right){
      return ("oops")
    };
      const MenuRightItems =this.props.right.map((jsonParts)=>
        <MenuRightItem item={jsonParts}/>
      );

    return(
        <ul className="navbar-nav">{MenuRightItems}
        <SearchBox/>
        </ul>

    )
  }
}

export default MenuRightItems
