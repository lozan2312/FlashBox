import React from 'react';
import './heading.css'

const Heading=(props)=>{
  return (
    <div>
      <div className="conh1 col-12 mt-4">
        <h1 id="conh1" class="text-center" > {props.heading}</h1>
      </div>
      <div className="consp col-12 text-center">
        <span id="consp"><b>{props.span}</b></span>
      </div>
    </div>
  )
}

export default Heading
