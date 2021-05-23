import React from 'react';
import Menu from '../../../general/menu_top/menu';
import Navbar from '../../../general/navbar/navbar';
import './header_signin.css';
import AllSignIn from '../form_signin/allSignin';




class HeaderSignIn extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div className="container">
          <Menu menu={this.props.data.Header}/>
          <Navbar nav={this.props.data.Header}/>
          <AllSignIn data={this.props.data.Signin}/>
      </div>
    )
  }
}
export default HeaderSignIn
