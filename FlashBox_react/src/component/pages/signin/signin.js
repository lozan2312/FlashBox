import React from 'react';
import HeaderSignIn from './header_signin/header_signin';
import './signin.css'

class SignIn extends React.Component {
  constructor() {
   super();
   this.state = { data: [] };
 }

 componentDidMount() {
   fetch('/signin')
     .then(res => res.json())
     .then(json => this.setState({ data: json }));
 }
  render(){
    if (this.state.data.length==0)
        return (<p>ops</p>);
    return(
      <div id="signin">
        <HeaderSignIn data={this.state.data}/>
     </div>
      );
    }
  }

export default SignIn
