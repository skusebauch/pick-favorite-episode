import React, { useContext, useEffect } from "react";
import { Store } from "./store/Store";

import "./App.css";

function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    console.log("need to fetch due to current state 0");
    const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };
  console.log(state);
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </div>
  );
}

export default App;
