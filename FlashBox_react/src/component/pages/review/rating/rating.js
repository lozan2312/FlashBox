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
           value={5}
           max={5}
           onChange={(value) => console.log(`Rated with value ${value}`)}
           readOnly
         />
      </div>
    )
  }
}
export default Rate
