import React from 'react';
import Persondetails from '../../../../general/FormDetails/PersonDetails';
import Button from '../../../../general/Button/Button';
import HoverRating from './person_rate';
import './form_review.css'
import Message from '../../../../general/FormDetails/Message';

class FormReview extends React.Component{
  constructor(props) {
   super(props);
 }
  render(){
    return(
      <div className="formreview">
        <form className="formrev" action="/action_page.php">
          <Persondetails json={this.props.data}/>
          <HoverRating/>
          <div class="form-group col-5">
            <Message value="Comment:" id="message"/>
            <div className="mt-4 sendbtn col-12">
              <Button name="Send" type="submit"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default FormReview
