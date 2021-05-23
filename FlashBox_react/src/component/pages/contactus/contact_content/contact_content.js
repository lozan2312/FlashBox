import React from 'react';
import CheckSubjects from './check_subjects/check_subjects';
import Persondetails from '../../../general/form_details/person_details';
import Button from '../../../general/button/button';
import './contact_content.css';
import Message from '../../../general/form_details/message';

class ContentContact extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className="personmessage container border">
          <div>
            <h3 className="mt-5 text-center">Looking for help?</h3>
            <p className="col-12 pt-2 text-center">
              Send us a message and we will get back to you.
            </p>
          </div>
          <form className="formcon" action="/action_page.php">
            <Persondetails json={this.props.data.PersonDetails}/>
            <CheckSubjects data={this.props.data.Subjects}/>
            <div className="form-group row mt-5">
              <Message value="Message:" class="col-5" id="message"/>
            </div>
            <div className="mt-4 sendbtn col-12">
              <Button name="Send" type="submit"/>
            </div>
          </form>
        </div>
        <div class="col-12 thank text-center display-4 mt-5">
          <span>Thank You!</span>
        </div>
      </div>
    )}}
export default ContentContact
