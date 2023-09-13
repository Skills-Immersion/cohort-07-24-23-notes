import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Show from './Show';
import ShowsList from './ShowsList';
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ShowDetail from './ShowDetail';

function App() {

  const [clicks, setClicks] = useState(0);

  // let's practice with useEffect
  // the side effect that we will do is to change the document.title
  // in general, we pass a function to useEffect that contains our side-effect-ful code

  useEffect(() => {
    document.title = `TV Showy ${Date.now()}`;
  }, [clicks])
  // array of variables as the second argument is us telling React which variables to care about
  // i.e. if any of those variables change, re-run the useEffect
  // SO, if we pass in an empty array, React will NEVER re-run the useEffect

  const [tvShowsArray, setTvShowsArray] = useState([]);
  // fetching TV shows
  useEffect(() => {
    // create an abortcontroller
    const abortcontroller = new AbortController();
    // get the data from the API
    fetch('https://api.tvmaze.com/shows', { signal: abortcontroller.signal })
      // transform the data from a JSON string to an actual array of objects
      .then(response => response.json())
      // do something with the data
      .then(data => setTvShowsArray(data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          throw err;
        } else {
          console.log('there was an aborterror');
        }
      });
    // cleanup function: if React needs to remove the component
    // this function will get called by React
    return () => abortcontroller.abort();
  }, [])

  // async/await
  // cannot pass an async function into useEffect
  // so, we'll instead write an inner async function and call it
  // useEffect(() => {
  //   async function fetchTvShows() {
  //     let response = await fetch('https://api.tvmaze.com/shows');
  //     let data = await response.json();
  //     setTvShowsArray(data);
  //   }
  //   fetchTvShows();
  // }, [])


  return (
    <Router>
      <div className="container">
        <Link to="/">
          <h1 onClick={() => setClicks(clicks + 1)}>TV Showy {clicks}</h1>
        </Link>
        <h4>the finest app for finding information about TV shows</h4>
        {/* switch ensures that only one of the routes will get rendered - specifically, the first one where the path matches */}
        {/* this allows us to have a "not found" catchall route - if none of the others matched, say "not found" */}
        <Switch>
          <Route path="/" exact>
            <ShowsList shows={tvShowsArray} />
          </Route>
          <Route path="/potato">
            secrets!
          </Route>
          <Route path="/shows/:id">
            <ShowDetail />
          </Route>
          <Route>
            Page Not Found
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
