import React from 'react';
import Button from '../Button/Button'


class CardNumber extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id={this.props.id}>
        <div className="card-deck ">
        {this.props.json.map((item) => {
          return(
            (("icon" in item)==1)?
              <div className="card">
                <div className="card-body text-center">
                  <span className="card-title">{item.number}</span>
                  <p className="card-text mt-4">{item.text}</p>
                  <a className="display-4" href={item.url}>
                    <i className={item.icon}></i>
                  </a>
                </div>
            </div>:
            <div className="card">
              <div className="card-body text-center">
                <a href={this.props.href}>
                  <span className="card-title">{item.number}</span>
                  <p className="card-text mt-4">{item.text}</p>
                </a>
              </div>
          </div>
          )
          })}
        </div>
      </div>
    )}}

export default CardNumber;
