import React from 'react';
import ListStars from './json_stars';
import './check_stars.css'

class CheckStars extends React.Component{
  render(){
    return(
      <div className="checkstars col-7">
      <h2 className="col-12 font-weight-bold">Rate Us</h2>
    {ListStars.map((item,index)=>{
      return(
        <div key={index}>
          <div className="form-check radio" for={item.for}>
            <label className="form-check-label">
              <input type="radio" name="optradio" className="form-check-input"/>
                  <div dangerouslySetInnerHTML={{__html:item.value}}>
                  </div>
                  {item.text}
            </label>
          </div>
        </div>
      )
    })}
    </div>
  )
  }
}
export default CheckStars
