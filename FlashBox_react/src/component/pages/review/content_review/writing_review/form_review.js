import React from 'react';
import ReviewJson from './form_review_json';
import Persondetails from '../../../../general/form_details/person_details';
import Button from '../../../../general/button/button';
import HoverRating from './person_rate';
import './form_review.css'
import Message from '../../../../general/form_details/message';

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
