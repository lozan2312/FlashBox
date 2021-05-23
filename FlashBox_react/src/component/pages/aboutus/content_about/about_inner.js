import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './about_inner.css'

class AboutInner extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div id="aboutInner">
      <img src="/img/about/one.jpg"/>
      <div className="col-6 float-right">
        <OwlCarousel className="owl-carousel owl-theme " items={1}>
          {this.props.data.map((item)=>{
            return(
              <div className='item mt-5'>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            )
          }
          )}
        </OwlCarousel>
        </div>
    </div>
    )
  }
}
export default AboutInner
