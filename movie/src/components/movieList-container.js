// a.	MovieList – a container for all the Movie components and their data.

import React from "react";
import Movie from "./movie";


export default class MovieList extends React.Component{
    // constructor(props){

    // }
    render(){
        return (
        // let movieTitles = [
            <div className="movie-list">
            <Movie {...{
                id: 1,
                Title: "Death on the Nile",
                Starring: "Kenneth Branagh, Gal Gadot, Armie Hammer, Annette Bening, Rose Leslie, Letitia Wright",
                Release: "February 11, 2022 (formerly September 17, 2021)",
                Synposis: "Kenneth Branagh will return as detective Hercule Poirot following the surprise success of 2017\’s Murder on the Orient Express, which Branagh also directed. So far, big names like Gal Gadot, Armie Hammer, Annette Bening, Letitia Wright, and Rose Leslie have joined the whodunit.",
                Image: "https://m.media-amazon.com/images/M/MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
            }} />
            <Movie {...{
                id: 2,
                Title: "The Adam Project",
                Starring: "Ryan Reynolds, Jennifer Garner, Mark Ruffalo, Catherine Keener, Zoe Saldana, Walker Scobell",
                Release: "March 11, 2022 on Netflix",
                Synposis: "Ryan Reynolds reunites with Free Guy director Shawn Levy for this Netflix sci-fi adventure about a man who travels back in time to team up with his younger self and confront his past in order to save the future. This is one of the higher-profile films for Netflix, which has once again committed to releasing at least one new film every week in 2022.",
                Image: "https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"
            }} />
             <Movie {...{
                id: 3,
                Title: "Turning Red",
                Starring: "Rosalie Chiang, Sandra Oh, James Hong",
                Release: "March 11, 2022 on Disney+",
                Synposis: "The first of two Pixar offerings in 2022 is this fantastical coming-of-age tale about a 13-year-old girl who transforms into a giant red panda whenever she gets too excited about something. It will be the feature directorial debut of Domee Shi, who won the Oscar for Best Animated Short Film for Bao in 2018, and though the film was originally scheduled for a theatrical release, it was subsequently changed to be a Disney+ exclusive.",
                Image: "https://lumiere-a.akamaihd.net/v1/images/p_turningred_v2_21513_76ff27f6.png"
            }} />
            <Movie {...{
                id: 4,
                Title: "Lightyear",
                Starring: "Chris Evans",
                Release: "June 17, 2022",
                Synposis: "The Toy Story franchise proper has come to an end (presumably), but Pixar says there\’s still more fun to be had with these characters… just, in a different way. Fresh off his stint as the MCU\’s Captain America, Chris Evans will lend his voice to the “real” Buzz Lightyear, the astronaut who was the inspiration for the action figure voiced by Tim Allen, in a prequel that will explore how he became so famous that they turned him into a toy.",
                Image: "https://pbs.twimg.com/media/FEABqZrX0AM_kBB?format=jpg&name=large"
            }} />
        </div>
        // return(
            // <div className="movieTitles">
            //     {movieTitles}
            // </div>
        );
    }
}





// export default class MovieList extends React.Component {
//   render() {
//     return (
//       <div className="card-group">
//         <div className="card">
//           <img src={this.props.Images} className="card-img-top" />
//           <div className="card-body">
//             <h5 className="card-title">{this.props.Title}</h5>
//             <p className="card-text">{this.props.Synposis}</p>
//             <h6>Rate this movie</h6>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }