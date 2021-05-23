import React from 'react';
import './content_review.css';
import CardFeatures from './card_content/card_content_feature/card_content_feature';
import CardReviews from './card_content/card_content_review/card_content_review';
import FormReview from './writing_review/form_review';

class ContentReview extends React.Component{
  render(){
    return(
      <div id="contentreview" className="container">
        <CardReviews data={this.props.data.Reviewer}/>
        <h3> Behind every review is an experience that matters </h3>
        <FormReview data={this.props.data.ReviewDetails}/>
        <CardFeatures data={this.props.data.Features}/>
      </div>
    )
  }
}
export default ContentReview
