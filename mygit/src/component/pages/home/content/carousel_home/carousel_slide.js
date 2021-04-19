import React from 'react';



class CarouselSlide extends React.Component{
  render(){
    return(
      <ul className="carousel-indicators ">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
        <li data-target="#demo" data-slide-to="3"></li>
      </ul>
    )
  }
}
export default CarouselSlide
