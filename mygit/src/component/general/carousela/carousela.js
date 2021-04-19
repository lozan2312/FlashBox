import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Carousela extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Carousel>
      {this.props.json.map((item)=>{
        return(
          <Carousel.Item interval={1000}>
            <img src={item.url}/>
            <Carousel.Caption>
              hi
            </Carousel.Caption>
          </Carousel.Item>
        )})}
      </Carousel>
    )
  }
}

export default Carousela
