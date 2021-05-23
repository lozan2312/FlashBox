import React from 'react';
import './title.css'

const Title=(props)=>{
  return (
    <div id="title">
      <div id={props.id} className="col-12">
        <h1 className="display-3 text-center font-weight-bolder">
        {props.logo_head}
        </h1>
      </div>
      <div className="text-center col-12">
          <h2 className={props.sclass}>{props.slogan}</h2>
      </div>
    </div>
  )
}

export default Title
