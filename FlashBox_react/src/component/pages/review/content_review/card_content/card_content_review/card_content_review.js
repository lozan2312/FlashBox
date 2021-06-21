import React from 'react';
import './card_content_review.css';
import {
  Card, CardImg, CardText, CardBody,CardFooter,
  CardTitle, CardSubtitle, Button,CardDeck
} from 'reactstrap';
import Rate from '../../../rating/rating'

class CardReviews extends React.Component{
  constructor(props) {
   super(props);
 }
  render(){
    return(
      <div className="cardreviews justify-content-center">
      <h1>Costumers Reviews</h1>
        <CardDeck>
        {this.props.data.map((item)=>{
          return(
              <Card>
                  <CardBody>
                    <CardTitle tag="span">
                    <CardImg src={item.img} className="mr-2"/>{item.title}</CardTitle>
                    <CardSubtitle  tag="span" className="mb-2">
                    <Rate value="5"/>
                    </CardSubtitle>
                    <CardText>{item.review}</CardText>
                  </CardBody>
                    <CardText>
                      <small className="text-muted pl-3">{item.time}</small>
                    </CardText>
              </Card>
          )})}
        </CardDeck>
    </div>
    )
  }
}

export default CardReviews
