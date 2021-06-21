import React from 'react';
import './content.css';
import CardNumber from '../../../general/CardNumber/CardNumber';
import CardSuggestion from './card_sugges/card_sugges';
import Carousela from './carousela/carousela';
import ChatBox from '../../../general/chat/chat';

class Content extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="content" className="content container">
        <h1 class="col-12 text-center display-4">Logistic steps</h1>
        <CardNumber json={this.props.data.Steps} id="homesteps"/>
        <Carousela data={this.props.data.Carousel}/>
        <CardSuggestion data={this.props.data.Suggestion}/>
        <ChatBox/>
      </div>
    )
  }
}
export default Content
