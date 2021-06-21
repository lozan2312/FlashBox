import React from 'react';
import './PersonDetails.css'


class Persondetails extends React.Component{
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

      //Name
      if(!fields["name"]){
         formIsValid = false;
         errors["name"] = "Cannot be empty";
      }

      if(typeof fields["name"] !== "undefined"){
         if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
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

      if (!fields["confirm_password"]) {
        formIsValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }

      if (typeof fields["password"] !== "undefined" && typeof fields["confirm_password"] !== "undefined") {

        if (fields["password"] != fields["confirm_password"]) {
            formIsValid = false;
          errors["confirm_password"] = "Passwords don't match.";
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
      <div id="personDetails">
        {this.props.json.map((item,index)=>{
          return(
            (item.type=="radio")?
            <div
                key={index}
                className="form-check form-check-inline mt-5"
              >
              <input
                 className={item.cName}
                 type={item.type}
                 name="inlineRadioOptions"
               />
              <label
                 className={item.cNameLabel}
                 for={item.for}>
                 {item.value}
               </label>
            </div>
            :
            <div key={index}>
              <div className="form-group mt-5 row">
                <label
                  for={item.for}
                  className={item.cNameLabel}
                  >
                  {item.value}
                </label>
                <div className="col-5">
                  <input
                    type={item.type}
                    className={item.cName}
                    placeholder={item.placeholder}
                  />
                </div>
              </div>
            </div>
            )
          })}
    </div>
    )
  }
}
export default Persondetails
