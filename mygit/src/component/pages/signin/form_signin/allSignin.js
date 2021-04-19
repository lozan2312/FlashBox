import React from "react";
import Button from '../../../general/button/button';
import FormSignInJson from './form_signin_json';
import Title from '../../../general/title/title';
import RememberMe from './remember';
import './allSignin.css';
import NoteSignUp from './note_signup'
import FormSignIn from './signin_form'


class AllSignIn extends React.Component{
  render(){
    return(
      <div className="formsign">
        <form action='/action_page.php'>
          <Title sclass="abouthead" id="logoheading" logo_head="Flash Box" slogan="Sign In"/>
          <div id="border">
          <FormSignIn/>
          <RememberMe/>
          <NoteSignUp/>
          </div>
        </form>
      </div>
    )
  }
}

export default AllSignIn;
