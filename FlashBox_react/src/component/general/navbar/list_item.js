import React from 'react';



class ListItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li className="nav-item">
        <a className={this.props.item.cName} href={this.props.item.url}>
        {this.props.item.name}
        </a>
      </li>

    )
  }
}
export default ListItem
