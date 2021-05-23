import React from 'react';
import './tracking.css';

class Tracking extends React.Component{
  
  render(){
    return(
      <div class="container px-1 px-md-4 py-5 mx-auto" id="track">
          <div class="card">
              <div class="row d-flex justify-content-between px-3 top">
                  <div class="d-flex">
                      <h5>ORDER <span class="font-weight-bold">#Y34XDHR</span></h5>
                  </div>
                  <div class="d-flex flex-column text-sm-right">
                      <p class="mb-0">Expected Arrival <span>21/06/2021</span></p>
                      <p>ID number:<span>321654789</span></p>
                      <p>Adress:<span>osafia,aba hushi 107</span></p>
                  </div>
              </div>
              <div class="row d-flex justify-content-center">
                  <div class="col-12">
                      <ul id="progressbar" class="text-center">
                          <li class="active step0"></li>
                          <li class="active step0"></li>
                          <li class="active step0"></li>
                          <li class="step0"></li>
                      </ul>
                  </div>
              </div>
              <div class="row justify-content-between top">
                  <div class="row d-flex icon-content"> <img class="icon" src="https://i.imgur.com/9nnc9Et.png"/>
                      <div class="d-flex flex-column">
                          <p class="font-weight-bold"> Processed </p>
                      </div>
                  </div>
                  <div class="row d-flex icon-content"> <img class="icon" src="https://i.imgur.com/u1AzR7w.png"/>
                      <div class="d-flex flex-column">
                          <p class="font-weight-bold">Shipped </p>
                      </div>
                  </div>
                  <div class="row d-flex icon-content"> <img class="icon" src="https://i.imgur.com/TkPm63y.png"/>
                      <div class="d-flex flex-column">
                          <p class="font-weight-bold">En Route</p>
                      </div>
                  </div>
                  <div class="row d-flex icon-content"> <img class="icon" src="https://i.imgur.com/HdsziHP.png"/>
                      <div class="d-flex flex-column">
                          <p class="font-weight-bold"> Arrived </p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    )
  }
}

export default Tracking
