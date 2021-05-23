import React from 'react';
import './card_sugges.css';
import SuggestionCard from './card_sugges_json';
import ClassSuggesTitle from './card_sugges_title';
import SuggestionInner from './card_sugges_inner';


class CardSuggestion extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <ClassSuggesTitle/>
      <SuggestionInner data={this.props.data}/>
  </div>
  )}}
export default CardSuggestion
