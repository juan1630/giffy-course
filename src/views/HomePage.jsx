import { useState } from "react";
import { useLocation } from "wouter";
import { ListGif } from "../components/ListGif";
import { useGifs } from "../hooks/useGifs";

export const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [location, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    pushLocation(`/gifs/${keyword}`);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setKeyword(value);
  };
  return (
    <>
      <h2 className="text-center"> Gif App </h2>
      <form className="mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          className="form-control-search"
          value={keyword}
          name="keyword"
          placeholder="Ingresa un palabra"
        />
      </form>
      {gifs ? <ListGif gifs={gifs} /> : null}
    </>
  );
};
