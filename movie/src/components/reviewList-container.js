// d.	ReviewList – a container inside of a Movie that houses Review components.
import React from "react";
import Review from "./review";
import StarContain from "./star-contain";
import ReviewForm from "./reviewForm";

// import starButton from "./stars";


export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.reviews,
      content: props.content,
      count: 0,
    };
    this.onTrigger = this.onTrigger.bind(this);
  }
  onTrigger = (event) => {
    this.props.handleCallback(event.target.reviews.value);
    event.preventDefault();
  };

  render() {
    let allReviews = [];
    if (this.state.allReviews) {
      allReviews = this.state.allReviews.map((allReviews, index) => (
        <Review key={index} {...allReviews} />
      ));
    }

    return (
      <div>
        <div>
          <StarContain />
          <Review/>
          <br />
          <div className="card-body">
            <button className="btn btn-outline-success" value="Submit">
              Submit
            </button>
            <br />
            <br />
            <h4>Movie reviews:</h4>
            <br />
            { allReviews } {this.state.content}
          </div>
          <br />
        </div>
      </div>
    );
  }
}