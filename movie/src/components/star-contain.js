import React from "react";
// import Stars from "./stars";
import StarCount from "./star-count";
import Stars from "./stars";


export default class StarContain extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counts: {},
            // counts will house each of the names w/ the counts associated to those names
            // will need to create count clicks method to use w/ this
            highestCount: 0,
            // / ** Events Part 3 - wk 2 react** 
            // - how to make the name of the button w/ the most clicks to be displayed above all the buttons 
            // - do this by adding more properties
            // */
            highestCountName: ''
            // this will enable us to compare the name of the buttons w/ the highest count

        };

        // add a bind method
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name){
        // increment the state from line 10
        this.setState(state => {
        // anytime we click on 1, and set the state
        // this will find all buttons w/ that name
            state.counts[name]
            ? state.counts[name]+= 1
            // if it has already been click, then we will add one more to the count
            : state.counts[name] =1;
            // if it has not been clicked, we will set it to be set to 1
            // essentally we will initialize it w/ the 1st count

            if(state.counts[name] > state.highestCount) {
                state.highestCount = state.counts[name];
                state.highestCountName = name;
            } 
            return state;
        });
    }

    render(){
        return(
            <div>
                <h2>Highest rating for this movie is {this.state.highestCountName} <svg
              xmlns="http://www.w3.org/2000/svg"
               width="18"
              height="18"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 18 18"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>!!!</h2>
            <br />
            <StarCount
            name="One"
            count = {this.state.counts.One}
            action = {this.countClicks}
            />
            <StarCount
            name="Two" 
            count = {this.state.counts.Two}
            action = {this.countClicks}
            />
            <StarCount
            name="Three" 
            count = {this.state.counts.Three}
            action = {this.countClicks}
            />
            <StarCount
            name="Four" 
            count = {this.state.counts.Four}
            action = {this.countClicks}
            />
            <StarCount
            name="Five" 
            count = {this.state.counts.Five}
            action = {this.countClicks}
            />
            </div>
        );
    }
}