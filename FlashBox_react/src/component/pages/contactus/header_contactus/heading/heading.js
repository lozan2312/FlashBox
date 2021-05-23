import React from 'react';
import './heading.css'

const Heading=(props)=>{
  return (
    <div id="heading">
      <div className="col-12 mt-4">
        <h1 class="text-center" > {props.heading}</h1>
      </div>
      <div className=" col-12 text-center">
        <span><b>{props.span}</b></span>
      </div>
    </div>
  )
}

export default Heading
