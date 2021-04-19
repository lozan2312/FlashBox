import React from 'react';
import Menu from '../../general/menu_top/menu';
import Navbar from '../../general/navbar/navbar';
import Title from '../../general/title/title';

class Error extends React.Component{
  render(){
    return(
      <div id="error">
        <Menu/>
        <Navbar/>
        <Title logo_head="Page Not Found" slogan="404"/>
      </div>
    )
  }
}
export default Error 
