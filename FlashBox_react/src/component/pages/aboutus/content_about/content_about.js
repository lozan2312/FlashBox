import React from 'react';
import './content_about.css';
import AboutInner from './about_inner'
import CardFactors from './cardFactors/cardFactors'
import CardFactorsData from './cardFactors/factorsData'
import CardNumber from '../../../general/card_number/card_number'
import DealsData from './cardDeals/cardDeals'


class ContentAbout extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="contentabout" className="container-fluid">
           <div className="line"></div>
           <h1>How it works?</h1>
           <h6>Step by step</h6>
           <AboutInner data={this.props.data.Details}/>
           <CardFactors json={this.props.data.Factors} title="The price is determined by several factors"/>
           <h2 className="text-center display-3 p-5">Subscription</h2>
           <CardNumber json={this.props.data.Deals} id="aboutdeal" href="/transaction"/>
      </div>
    )
  }
}
export default ContentAbout
