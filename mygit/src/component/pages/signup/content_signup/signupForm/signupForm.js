import React from 'react';
import SignUpData from '../signupData';
import Persondetails from '../../../../general/form_details/person_details'
import './signupForm.css'

class SignUpForm extends React.Component{
  render(){
    return(
      <div id="signupForm" className="container">
        <Persondetails json={SignUpData}/>
        <div className="form-group row mt-5">
          <label for="example-date-input" className="col-2 col-form-label">Date of birth:</label>
          <div className="col-5">
            <input className="form-control" type="date"  id="example-date-input"/>
          </div>
        </div>
        <div class="form-check mt-5 row">
          <h5>Gender</h5>
          <div class="form-check form-check">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Female</label>
          </div>
          <div class="form-check form-check">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">Male</label>
          </div>
          <form>
           <div className="form-group row col-5">
             <label for="sel1">Select list (select one):</label>
             <select className="form-control" id="sel1">
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
             </select>
            </div>
          </form>
        </div>


      </div>
    )
  }
}
export default SignUpForm
