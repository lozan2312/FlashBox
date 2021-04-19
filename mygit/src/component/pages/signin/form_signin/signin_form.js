import React from "react";
import FormSignInJson from './form_signin_json';


class FormSignIn extends React.Component{
  render(){
    return(
      <div>
        {FormSignInJson.map((item,index)=>{
          return(
            <div key={index} className='form-group'>
              <label for={item.for}>{item.lName}</label>
              <input type={item.type} class="form-control" id={item.id} placeholder={item.placeholder} name={item.name} required/>
            </div>
          )})}
      </div>
    )
  }
}

export default FormSignIn;
