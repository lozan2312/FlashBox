import React from 'react';
import './card.css';
import {CardItem} from'./card_json.js';
import Button from '../../../../general/button/button'


class Card extends React.Component{
  render(){
    return(
      <div id="card">
        <div className="card-deck ml-4">
        {CardItem.map((item,index) => {
          return(
              <div key={index} className="card">
                <div className="card-body text-center">
                  <span className="card-title">{item.number}</span>
                  <p className="card-text mt-4">{item.text}</p>
                  <a className="display-4" href={item.url}>
                    <i className={item.icon}></i>
                  </a>
                </div>
            </div>
          )
          })}
        </div>
      </div>
    )}}


export default Card;
