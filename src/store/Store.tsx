import React, { createContext, useReducer } from "react";
import { IState, IAction } from "../interfaces/interfaces";

const initialState: IState = {
  episodes: [],
  favourites: [],
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  console.log(action);
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload,
      };
    case "ADD_FAV":
      return {
        ...state,
        favourites: [action.payload, ...state.favourites],
      };

    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
