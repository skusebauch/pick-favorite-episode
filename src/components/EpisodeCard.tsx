import React, { useContext } from "react";
import { Store } from "../store/Store";
import { IAction, IEpisode } from "../interfaces/interfaces";
import "./EpisodeCard.css";

const EpisodeCard = () => {
  const { state, dispatch } = useContext(Store);

  const toggleFavAction = (episode: IEpisode): IAction => {
    return dispatch({
      type: "ADD_FAV",
      payload: episode,
    });
  };
  return (
    <section className="episode__container">
      {state.episodes.map((episode: IEpisode) => {
        return (
          <section className="episode__card" key={episode.id}>
            <img
              src={episode.image.medium}
              alt={`Rick and Mort: ${episode.name}`}
            />
            <div>{episode.name}</div>
            <section>
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
              <button type="button" onClick={() => toggleFavAction(episode)}>
                Fav
              </button>
            </section>
          </section>
        );
      })}
    </section>
  );
};

export default EpisodeCard;
