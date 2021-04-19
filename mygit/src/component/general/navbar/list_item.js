import React from 'react';
import ListItems from './list_items';
import JsonList from './jsonList';


class ListItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li className={this.props.item.liClass}>
        <a className={this.props.item.cName} href={this.props.item.url}>
        {this.props.item.name}
        </a>
      </li>

    )
  }
}
export default ListItem
