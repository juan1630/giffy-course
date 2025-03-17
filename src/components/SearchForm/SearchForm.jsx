import { useState } from "react";
import { useLocation } from "wouter";

export const SearchForm = () => {
  const [location, pushLocation] = useLocation();

  const [keyword, setKeyword] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setKeyword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    pushLocation(`/gifs/${keyword}`);
  };
  return (
    <>
      <form className="mb-4" onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          onChange={handleChange}
          className="form-control-search"
          value={keyword}
          name="keyword"
          placeholder="Ingresa un palabra"
        />
      </form>
    </>
  );
};
