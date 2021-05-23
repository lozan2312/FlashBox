import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousela.css'


class Carousela extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="carousela" className="container">
      <Carousel>
      {this.props.data.map((item)=>{
        return(
          <Carousel.Item interval={1000}>
            <center><img src={item.url}/></center>
            <Carousel.Caption>
            <div dangerouslySetInnerHTML={{__html:item.text}}>
            </div>
            </Carousel.Caption>
          </Carousel.Item>
        )})}
      </Carousel>
      </div>
    )
  }
}

export default Carousela
