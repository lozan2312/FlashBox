import React from 'react';
import ListItem from './list_item';
import JsonList from './jsonList';

class ListItems extends React.Component{
  render(){
      const ListItems=JsonList.map((jsonParts)=>(
        <ListItem item={jsonParts}/>
      ));
    return(
      <div class="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul className="navbar-nav">{ListItems}</ul>
      </div>
    )
  }
}

export default ListItems
