import { useState, useReducer } from "react";
import { useLocation } from "wouter";

const RAITINGS = ["g", "pg", "pg-13", "r"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RAITING: "update_raiting",
};

const reducerState = (state, action) => {
  if (action.type == ACTIONS.UPDATE_KEYWORD) {
    return {
      ...state,
      keyword: action.payload,
      times: state.times + 1,
    };
  }

  if (action.type == ACTIONS.UPDATE_RAITING) {
    return {
      ...state,
      raiting: action.payload,
    };
  }

  return state;
};

export const SearchForm = ({ initialKeyword = "", initialRaiting }) => {
  const [location, pushLocation] = useLocation();

  const [state, dispatch] = useReducer(reducerState, {
    keyword: initialKeyword,
    times: 0,
    raiting: initialRaiting,
  });

  const { keyword, times } = state;
  const [raiting, setRaiting] = useState(initialRaiting);

  const handleChange = (evt) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/gifs/${keyword}/${raiting}`);
  };

  const handleChangeRaiting = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.UPDATE_RAITING, payload: e.target.value });
    setRaiting(e.target.value);
  };

  return (
    <>
      <form className="mb-4">
        <input
          type="text"
          onChange={handleChange}
          className="form-control-search"
          value={keyword}
          name="keyword"
          placeholder="Ingresa un palabra"
        />
        <select value={raiting} onChange={handleChangeRaiting} name="raiting">
          <option> Raiting type </option>
          {RAITINGS.map((raiting, index) => (
            <option key={index}> {raiting} </option>
          ))}
        </select>
        <button onClick={handleSubmit} className="btn-search" > Buscar... </button>
        <small> {times} </small>
      </form>
    </>
  );
};
