import React from 'react';
import Button from '../../../general/Button/Button';


class RememberMe extends React.Component{
  render(){
    return(
      <div>
      <div className="form-check remember mt-3 mb-3">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" name="remember"/> Remember Me.
        </label>
      </div>
      <a href="/customerProfile"><Button name="Submit" type="submit"/></a>
      </div>
    )
  }
}
export default RememberMe
