import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import Title from '../../../general/title/title';
import TrackBox from './track_box/track_box';
import './header_home.css';

class HeaderHome extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="bg-img">
        <div id="header" className="container">
          <Menu menu={this.props.data.Header}/>
          <Navbar nav={this.props.data.Header}/>
          <Title sclass="sloganhome" id="logohead" logo_head="Flash Box" slogan="Express Courier Services"/>
          <TrackBox data={this.props.data.Content}/>
        </div>
      </div>
    )
  }
}
export default HeaderHome
