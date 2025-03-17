import { ListGif } from "../components/ListGif";
import { useGifs } from "../hooks/useGifs";
import {SearchForm} from "../components/SearchForm/SearchForm";

export const HomePage = () => {

  const { gifs } = useGifs();

  return (
    <>
      <h2 className="text-center"> Gif App </h2>
      <SearchForm />
      {gifs ? <ListGif gifs={gifs} /> : null}
    </>
  );
};
