import React from "react";
// import FormSignInJson from './form_signin_json';


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
      </div>
    )
  }
}

export default FormSignIn;
