import { useLocation } from "wouter";
import { useForm } from "./hook";

const RAITINGS = ["g", "pg", "pg-13", "r"];


export const SearchForm = ({ initialKeyword = "", initialRaiting }) => {
  const [location, pushLocation] = useLocation();
  const {keyword, raiting, times, updateKeyword, updateRaiting } = useForm(initialKeyword, initialRaiting);

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/gifs/${keyword}/${raiting}`);
  };

  const handleChangeRaiting = (e) => {
    e.preventDefault();
    updateRaiting(e.target.value);
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
        <button onClick={handleSubmit} className="btn-search">
          {" "}
          Buscar...{" "}
        </button>
        <small> {times} </small>
      </form>
    </>
  );
};
