import React from "react";
import RememberMe from './remember.js';
import Button from '../../../general/Button/Button.js'


class FormSignIn extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.data.map((item)=>{
          return(
            <div className='form-group'>
              <label for={item.for}>{item.value}</label>
              <input type={item.type} class="form-control"  placeholder={item.placeholder} required/>
            </div>
          )})}
          <RememberMe/>
            <a href="/customerProfile">
            <Button name="Submit" type="submit"/></a>
      </div>
    )
  }
}

export default FormSignIn;
