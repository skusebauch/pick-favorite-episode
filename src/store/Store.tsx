import React, { createContext } from "react";

interface IState {
  episode: [];
  favourites: [];
}

const initialState: IState = {
  episode: [],
  favourites: [],
};

export const Store = createContext<IState>(initialState);

const reducer = () => {};

export const StoreProvider = (props: any) => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
};
