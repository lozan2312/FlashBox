import React from "react";
import Title from '../../../general/title/title';
import './allSignin.css';
import NoteSignUp from './note_signup'
import FormSignIn from './signin_form';


class AllSignIn extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="formsign">
        <form method='POST'>
          <Title sclass="abouthead" id="logoheading" logo_head="Flash Box" slogan="Sign In"/>
          <div id="border">
          <FormSignIn data={this.props.data}/>
          <NoteSignUp/>
          </div>
        </form>
      </div>
    )
  }
}

export default AllSignIn;
