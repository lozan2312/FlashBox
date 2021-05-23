import React from 'react';
import Rating from 'material-ui-rating';
import './rating.css'

class Rate extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Rating
           value={this.props.value}
           max={5}
           onChange={(i) => console.log('onChange ' + i)}
           readOnly
         />
      </div>
    )
  }
}
export default Rate
