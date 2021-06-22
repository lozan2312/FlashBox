import React from 'react';
import './tracking.css';

class Tracking extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container" id="track">
          <div className="card">
              {this.props.data.TrackingPackage.map((detail)=>{
                return(
              <div className="row d-flex justify-content-between px-3 top">
                  <div className="d-flex">
                      <h5>ORDER: <span class="font-weight-bold">{detail.Order_ID}</span></h5>
                  </div>
                  <div className="d-flex flex-column ">
                      <p><b><u>Expected Arrival</u>: </b><span>{detail.arrival_date}</span></p>
                      <p><b><u>ID number</u>: </b><span>{detail.User_ID}</span></p>
                      <p><b><u>Address</u>: </b><span>{detail.address}</span></p>
                  </div>
              </div>
                  )})}
              <div className="row d-flex justify-content-center">
                  <div className="col-12">
                      <ul id="progressbar" class="text-center">
                          <li className="active step0"></li>
                          <li className="active step0"></li>
                          <li className="active step0"></li>
                          <li className="step0"></li>
                      </ul>
                  </div>
              </div>
              <div className="row justify-content-between top">
              {this.props.data.Tracking.map((items)=>{
                return(
                  <div className="row d-flex icon-content"> <img src={items.url}/>
                      <div className="d-flex flex-column">
                          <p className="font-weight-bold status">{items.status}</p>
                      </div>
                  </div>
                )
              })}
              </div>
          </div>

      </div>
    )
  }
}

export default Tracking
