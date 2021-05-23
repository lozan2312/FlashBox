import React from 'react';
import ReactDOM from 'react-dom';


class MenuRightItem extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <li className="nav-item">
        <a className={this.props.item.cName} href={this.props.item.url}>
        <i className={this.props.item.icon}></i>
        </a>
      </li>
    )
  }
}
export default MenuRightItem
