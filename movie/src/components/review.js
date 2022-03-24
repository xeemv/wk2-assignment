// e.	Review – A text review a user can leave on a movie.

import React from "react";
import StarContain from "./star-contain";



export default class Review extends  React.Component {
  // onTrigger = (event) => {
  //   this.props.handleCallback(event.target.reviews.value);
  //   event.preventDefault();
  // };

  render() {
    return (
      <div>
        {/* <StarContain /> */}
        <br />
        <form onSubmit={this.onTrigger}>
          {/* <label className="form-label" id="rname">
          </label>
          <input
            className="form-control"
            placeholder="Reviewer's Name:"
            required
            // value={this.state.reviewData.name}
            // onChange={this.handleNameInputChanged}
          />{this.props.userName} */}
          <label className="form-label" id="mreview">
          </label>
          <textarea
            className="form-control"
            // value={this.state.reviewData.review}
            // onChange={this.handleReviewInputChanged}
            placeholder="Leave your movie review here......"
          />{this.props.reviews}
        </form>
      </div>
    );
  }
}


