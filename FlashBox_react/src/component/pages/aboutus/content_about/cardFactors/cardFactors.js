import React from 'react';
import './cardFactors.css';
import Button from '../../../../general/button/button'


class CardFactors extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="cardFactors">
      <h2 className="text-center p-5 display-3">{this.props.title}</h2>
        <div className="card-deck ">
        {this.props.json.map((item) => {
          return(
              <div className="card">
                <div className="card-body text-center">
                  <span className="card-title">
                    <i className={item.icon}></i>
                  </span>
                  <p className="card-text mt-4">{item.text}</p>
                    <div className="uline"></div>
                </div>
            </div>
          )
          })}
        </div>
      </div>
    )}}


export default CardFactors;
