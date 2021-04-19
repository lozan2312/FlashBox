import React from 'react';
import './content.css';
import Card from './card/card';
import CardSuggestion from './card/card_sugges/card_sugges';
import CarouselHome from './carousel_home/carousel_home';

class Content extends React.Component {
  render(){
    return(
      <div id="content" className="content container">
        <h1 class="col-12 text-center display-4">Logistic steps</h1>

        <Card/>
        <CarouselHome/>
        <CardSuggestion/>
      </div>
    )
  }
}
export default Content
