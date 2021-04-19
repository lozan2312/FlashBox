import React from 'react';
import SuggestionCard from './card_sugges_json';
import {AiOutlinePlus} from 'react-icons/ai';
import Button from '../../../../../general/button/button'
import Modal from '../modal/modal'
class SuggestionInner extends React.Component{
  render(){
    return(
      <div className="card-deck pt-5 col-12 cardsugges">
      {SuggestionCard.map((item,index)=>{
        return(
            <div key={index} className="card">
              <center><img className=" card-img-top img-fluid" src={item.url}/></center>
              <Modal item={item}/>
              <h6 className="text-center">{item.title}</h6>
            </div>

        )})}
      </div>
  )}}
export default SuggestionInner
