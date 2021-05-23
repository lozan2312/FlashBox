import React from 'react';
import Footer from '../../parts/footer/footer';
import './signup.css';
import HeaderSignUp from './header_signup/header_signup'
import ContentSignUp from './content_signup/content_signup.js'



class SignUp extends React.Component {
  constructor() {
   super();
   this.state = { data: [] };
 }

 componentDidMount() {
   fetch('/signup')
     .then(res => res.json())
     .then(json => this.setState({ data: json }));
 }
  render(){
    if (this.state.data.length==0)
        return (<p>ops</p>);
    return(
      <div id="signup">
      <div>
      <HeaderSignUp  header={this.state.data.Header}/>
      <ContentSignUp data={this.state.data}/>
      <Footer data={this.state.data.Header}/>
      </div>
     </div>
      );
    }
  }

export default SignUp
