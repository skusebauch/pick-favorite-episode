// All the interfaces ready to export

export interface IEpisode {
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

export interface IFavourites {
  //placeholders
}

export interface IState {
  episodes: IEpisode[];
  favourites: any[];
}

export interface IAction {
  type: string;
  payload: any;
}
