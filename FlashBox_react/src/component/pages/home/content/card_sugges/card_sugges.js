import React from 'react';
import './card_sugges.css';
import SideTitle from '../../../../general/SideTitle/SideTitle';
import SuggestionInner from './card_sugges_inner';


class CardSuggestion extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <SideTitle h2="Other services" h6="Suggestions"/>
      <SuggestionInner data={this.props.data}/>
  </div>
  )}}
export default CardSuggestion
