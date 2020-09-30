import React, { useContext } from "react";
import { Store } from "./store/Store";

interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}
const EpisodeCard = () => {
  const { state } = useContext(Store);
  return (
    <section>
      {state.episodes.map((episode: IEpisode) => {
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
