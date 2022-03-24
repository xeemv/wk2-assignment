import { Button } from "bootstrap";
import React from "react";
import Stars from "./stars";

export default class StarCount extends React.Component {
    constructor(props) {
        super(props);
     


        this.handleClick = this.handleClick.bind(this);
        // bind the 'this' keyword to the function or method
    }
    
    handleClick(){
        // this.setState(state => ({count: state.count + 1}));
        // this will define the functionality we want to happen in a function or a method
        this.props.action(this.props.name);
    }


    render(){
        return (
          <button
            className="btn btn-outline-primary"
            onClick={this.handleClick}>
            {/* Counter {this.state.count} */}
            {/* {this.state.name} {this.state.count}  */}
            {/* took out line 49 and changed it from state to props, see line below */}
            Votes for {this.props.name} <svg
              xmlns="http://www.w3.org/2000/svg"
               width="18"
              height="18"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 18 18"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg> =  {this.props.count}
            
            {/* {this.props.count} */}
          </button>
        );
    }


}