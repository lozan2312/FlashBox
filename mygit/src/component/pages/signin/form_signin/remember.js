import React from 'react';
import Button from '../../../general/button/button';


class RememberMe extends React.Component{
  render(){
    return(
      <div>
      <div class="form-group form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember"/> Remember Me.
        </label>
      </div>
      <Button name="Submit" type="submit"/>
      </div>
    )
  }
}
export default RememberMe
