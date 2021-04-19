import React from 'react';
import CarouselBtn from './carousel_button';
import CarouselData from './carousel_data'


class CarouselInner extends React.Component{
  render(){
    return(
      <div className="carousel-inner">
      {CarouselData.map((item)=>{
      return(
          <div className={item.cName}>
            <center><img src={item.url}/></center>
            <div className={item.classN}>
              <div dangerouslySetInnerHTML={{__html:item.text}}>
              </div>
            </div>
          </div>

      )})}
      <CarouselBtn/>
      </div>
    )
  }
}
export default CarouselInner
