import { useContext, createContext, useReducer } from 'react';
import { SET_DATA } from '../utils/constant';

const initialState = {
  listComic: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DATA: {
      console.log('oay', payload);
      return {
        ...state,
        listComic: payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

const ComicContext = createContext(initialState);

const ComicProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ComicContext.Provider value={{ state, dispatch }}>
      {children}
    </ComicContext.Provider>
  );
};

const useComicContext = () => useContext(ComicContext);

export { ComicProvider, useComicContext };
