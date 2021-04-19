import React from 'react';
import './card_content_feature.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CardFeature from './card_review_feature';


class CardFeatures extends React.Component{
  render(){
    return(
      <div className="cardfeaturs float-right">
      <h1>Some Features</h1>
      {CardFeature.map((item)=>{
        return(
          <div>
            <Card>
              <CardBody>
                <CardTitle tag="h4">{item.title}</CardTitle>
                <CardSubtitle  tag="span" className="mb-2">{item.text}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        )})}
    </div>
    )
  }
}

export default CardFeatures
