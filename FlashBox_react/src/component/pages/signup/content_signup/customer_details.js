import React from 'react';
import Button from '../../../general/Button/Button'


class CustomerDetails extends React.Component{
  constructor(props){
     super(props);

     this.state = {
         fields: {},
         errors: {}
     }
  }

  handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //FirstName
      if(!fields["fname"]){
         formIsValid = false;
         errors["fname"] = "Cannot be empty";
      }

      if(typeof fields["fname"] !== "undefined"){
         if(!fields["fname"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["fname"] = "Only letters";
         }
      }
      //LastName
      if(!fields["lname"]){
         formIsValid = false;
         errors["lname"] = "Cannot be empty";
      }

      if(typeof fields["lname"] !== "undefined"){
         if(!fields["lname"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["lname"] = "Only letters";
         }
      }

      //Email

      if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "Please enter your email Address.";
      }

      if (typeof fields["email"] !== "undefined") {

          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["email"])) {
              formIsValid = false;
          errors["email"] = "Please enter valid email address.";
          }
      }

     //password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!fields["psw-repeat"]) {
      formIsValid = false;
      errors["psw-repeat"] = "Please enter your confirm password.";
    }

    if (typeof fields["password"] !== "undefined" && typeof fields["psw-repeat"] !== "undefined") {

      if (fields["password"] != fields["psw-repeat"]) {
          formIsValid = false;
        errors["psw-repeat"] = "Passwords don't match.";
      }
    }

     this.setState({errors: errors});
     return formIsValid;
 }

 contactSubmit(e){
      e.preventDefault();

      if(this.handleValidation()){
         alert("Form submitted");
      }
  }

  handleChange(field, e){
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({fields});
  }

  render(){
    return(
      <form action={this.props.action} method="post" onSubmit= {this.contactSubmit.bind(this)}>
        <div className={this.props.cn} id={this.props.id}>
        {this.props.data.map((items)=>{
          return(
                <div className="row  mt-5">
                  <label
                    for={items.for}
                    class="col-4">
                    {items.value}
                  </label>
                  <input
                    className="form-control col-5"
                    type={items.type}
                    placeholder={items.placeholder}
                    onChange={this.handleChange.bind(this, items.for)}
                    value={this.state.fields[items.for]}
                  />
                  <div>{this.state.errors[items.for]}</div>
                </div>
            )})}
          <Button type="btn" name="Submit"/>
          </div>
        </form>

      )
  }
}
export default CustomerDetails
