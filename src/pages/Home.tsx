import React, { useContext } from "react";
import EpisodeCard from "../components/EpisodeCard";
import { Store } from "../store/Store";
import "./Home.css";

function Home(): JSX.Element {
  const { state } = useContext(Store);
  return (
    <>
      <div className="home">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode</p>
      </div>
      <div>Favourite(s): {state.favourites.length}</div>
      <EpisodeCard />
    </>
  );
}

export default Home;
