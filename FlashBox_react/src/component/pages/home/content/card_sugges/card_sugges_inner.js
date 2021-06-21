import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import Button from '../../../../general/Button/Button'


class SuggestionInner extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="card-deck pt-5 col-12 cardsugges">
      {this.props.data.map((item)=>{
        return(
            <div className="card">
              <center><img className=" card-img-top img-fluid" src={item.url}/></center>
              <div class="card-body">
              <h6  class="card-title">{item.head}</h6>
                <div dangerouslySetInnerHTML={{__html:item.text}}>
                </div>
              </div>
            </div>
        )})}
      </div>
  )}}
export default SuggestionInner
