import React from 'react';
import './content_signup.css';
import CustomerDetails from './customer_details'

class ContentSignUp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
              Regular: true,
              white: true
         }
  }

  changeText(){
        this.setState({Regular: !this.state.Regular})
    }
  render(){
       let text = this.state.Regular ? "Regular Customer" : "Business Customer";

    return(
      <div className="container" id="SignupContent">
         <p className="text-center">Fill in your personal details</p>
         <div className="text-center">
         <button
           onClick={this.changeText.bind(this)}
           type="button"
           data-toggle="collapse"
           data-target=".multi-collapse"
           aria-controls="multiCollapseExample1 multiCollapseExample2">
             {text}
           </button>
           <CustomerDetails
           action="/signup/regular"
            id="multiCollapseExample1"
            cn="col-12 collapse show multi-collapse"
            data={this.props.data.RegDetails}
            />
          </div>
          <div className="text-center">
            <CustomerDetails
             action="/signup/business"
             id="multiCollapseExample2"
             cn="col-12 collapse multi-collapse"
             data={this.props.data.BusDetails}
             />
          </div>
      </div>
      )
  }
}
export default ContentSignUp
