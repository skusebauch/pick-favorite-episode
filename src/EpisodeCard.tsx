import React, { useContext } from "react";
import { Store } from "./store/Store";

const EpisodeCard = () => {
  const { state } = useContext(Store);
  return (
    <section>
      {state.episodes.map((episode: any) => {
        return (
          <section key={episode.id}>
            <img
              src={episode.image.medium}
              alt={`Rick and Mort: ${episode.name}`}
            />
            <div>{episode.name}</div>
            <section>
              Season: {episode.season} Number: {episode.number}
            </section>
          </section>
        );
      })}
    </section>
  );
};

export default EpisodeCard;
