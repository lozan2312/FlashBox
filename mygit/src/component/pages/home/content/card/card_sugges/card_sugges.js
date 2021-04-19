import React from 'react';
import Card from '../card';
import './card_sugges.css';
import SuggestionCard from './card_sugges_json';
import ClassSuggesTitle from './card_sugges_title';
import SuggestionInner from './card_sugges_inner';


class CardSuggestion extends React.Component{
  render(){
    return(
      <div>
      <ClassSuggesTitle/>
      <SuggestionInner/>
  </div>
  )}}
export default CardSuggestion
