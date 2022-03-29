// f.	ReviewForm – a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.

import React from "react";
// import Rating from "./rating";
import ReviewList from "./reviewList-container";

export default class ReviewForm extends React.Component {

  render(){
    let allReviews = [
      {
        reviewer: 'Jenny',
        content: "Best Movie"
      },
      {
        reviewer: 'Jenny',
        content: "Awesome movie"
      }
    ];
  
    return(
    <div>
      <ReviewList {...{allReviews: allReviews, content: "The Best Movie"}} />
      {/* <ReviewList /> */}
    </div>
    );
  }
}
