import { ListGif } from "../components/ListGif";
import { useGifs } from "../hooks/useGifs";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";

export const HomePage = () => {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <h2 className="text-center"> Gif App </h2>
      <SearchForm />
      {gifs ? <ListGif gifs={gifs} /> : null}
    </>
  );
};
