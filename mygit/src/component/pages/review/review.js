import React from 'react';
import HeaderReview from './header_review/header_review';
import ContentReview from './content_review/content_review';
import Footer from '../../parts/footer/footer'
import './review.css';


class Review extends React.Component{
  render(){
    return(
      <div id="review">
        <HeaderReview/>
        <ContentReview/>
        <Footer/>
      </div>
    )
  }
}
export default Review
