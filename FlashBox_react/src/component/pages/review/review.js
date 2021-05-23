import React from 'react';
import HeaderReview from './header_review/header_review';
import ContentReview from './content_review/content_review';
import Footer from '../../parts/footer/footer'
import './review.css';


class Review extends React.Component{
  constructor() {
   super();
   this.state = { data: [] };
 }

 componentDidMount() {
   fetch('/review')
     .then(res => res.json())
     .then(json => this.setState({ data: json }));
 }
  render(){
    if (this.state.data.length==0)
        return (<p>ops</p>);
    return(
      <div id="review">
        <HeaderReview header={this.state.data.Header}/>
        <ContentReview data={this.state.data}/>
        <Footer data={this.state.data.Header}/>
      </div>
    )
  }
}
export default Review
