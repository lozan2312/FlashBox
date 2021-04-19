import React from 'react';


class CardData extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
      {this.props.data.map((item)=>{
        <li>{item.text}</li>
      })}
      </ul>

    )
  }
}
export default CardData
