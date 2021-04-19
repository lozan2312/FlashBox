import React from 'react';
import CarouselData from './carousel_data';
import CarouselSlide from './carousel_slide';
import CarouselBtn from './carousel_button';
import CarouselInner from './carousel_inner'
import './carousel_home.css';


class CarouselHome extends React.Component{
  render(){

    return(
      <div id="homeCarousel" className=" container">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <CarouselSlide/>
          <CarouselInner/>
      </div>
    </div>
    )
  }
}

export default CarouselHome
