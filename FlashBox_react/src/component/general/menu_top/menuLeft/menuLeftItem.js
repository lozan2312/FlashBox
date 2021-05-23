import React from 'react';



class MenuLeftItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li className="nav-item">
        <a className={this.props.item.cName} href={this.props.item.url}>
        <i className={this.props.item.icon}></i>
        <span className="pl-2">{this.props.item.name}</span>
        </a>
      </li>
    )
  }
}
export default MenuLeftItem
