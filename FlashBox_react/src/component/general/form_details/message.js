import React from 'react';
import './message.css'



class Message extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="message">
        <label for="comment" className="col-2 col-form-label">{this.props.value}</label>
        <div className={this.props.class}>
          <textarea className="form-control" rows="5" id={this.props.id}></textarea>
        </div>
      </div>
    )
  }
}
export default Message
