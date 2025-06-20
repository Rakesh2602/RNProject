// context/ContextApi.js
import React, { createContext, useReducer } from 'react';

export const CounterContext = createContext();

const initialState = {
  counter: 0,
  theme: 'light',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    case 'RESET':
      return { ...state, counter: 0 };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
