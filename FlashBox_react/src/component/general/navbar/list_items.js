import React from 'react';
import ListItem from './list_item';


class ListItems extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (!this.props.data){
      return ("oops")
    }
      const ListItems = this.props.data.map((jsonParts)=>
        <ListItem item={jsonParts}/>
      );
    return(
        <ul className="navbar-nav">{ListItems}</ul>
    )
  }
}

export default ListItems
