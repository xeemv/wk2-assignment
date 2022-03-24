import logo from './logo.svg';
import './App.css';
import MovieList from '../src/components/movieList-container';
import StarContain from './components/star-contain';
import ReviewForm from './components/reviewForm';
import ReviewList from './components/reviewList-container';
import Review from './components/review';
import Movie from './components/movie';

function App() {
  return (
    // <body>
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */}
     
       <MovieList /> 
        {/* <StarContain /> */}
        {/* <ReviewForm /> */}
      {/* <ReviewList /> */}
      {/* <Review/> */}
     
    </div>
    {/* </body> */}
  </>
  
  );
}

export default App;