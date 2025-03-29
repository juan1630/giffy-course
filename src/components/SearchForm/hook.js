import { useReducer } from "react";

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RAITING: "update_raiting",
};

export const useForm = (initialKeyword = "", initialRaiting = "g") => {
  const reducerState = (state, action) => {
    
    switch (action.type) {
      case ACTIONS.UPDATE_KEYWORD:
        return {
          ...state,
          keyword: action.payload,
          times: state.times + 1,
        };
      case ACTIONS.UPDATE_RAITING:
        return {
          ...state,
          raiting: action.payload,
        };
      default:
        throw new Error("Action not supported");
    }
  };
  //TODO: HACER EL RESET DE LOS FILTERS
  const [state, dispatch] = useReducer(reducerState, {
    keyword: initialKeyword,
    times: 0,
    raiting: initialRaiting,
  });

  const { keyword, times, raiting } = state;

  return {
    keyword,
    times,
    raiting,
    dispatch,
    updateKeyword: (keyword) =>{
      dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword })
    },
    updateRaiting: (raiting) =>
      dispatch({ type: ACTIONS.UPDATE_RAITING, payload: raiting }),
  };
};
