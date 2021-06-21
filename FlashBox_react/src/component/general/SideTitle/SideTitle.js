import React from 'react';
import './SideTitle.css'

class SideTitle extends React.Component{
  render(){
    return(
      <div id="SideTitle">
        <div className="col-12 suggestitle">
          <div className="vl"></div>
            <h2 className="font-weight-bold">{this.props.h2}</h2>
            <h6>{this.props.h6}</h6>
        </div>
      </div>
    )
  }
}

export default SideTitle
