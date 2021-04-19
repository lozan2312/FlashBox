import React from 'react';
import './content_about.css';
import AboutInner from './about_inner'

class ContentAbout extends React.Component{
  render(){
    return(
      <div id="contentabout" className="container-fluid">
           <div className="line"></div>
           <h1>How it works?</h1>
           <h6>Step by step</h6>
           <AboutInner/>
      </div>
    )
  }
}
export default ContentAbout
