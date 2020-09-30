import React, { useContext } from "react";
import { Store } from "./store/Store";

import "./App.css";

function App(): JSX.Element {
  const store = useContext(Store);
  return (
    <div className="App">
      {console.log(store)}
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </div>
  );
}

export default App;
