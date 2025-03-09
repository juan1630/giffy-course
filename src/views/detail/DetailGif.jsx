import { useContext } from "react";
import GifContext from "../../context/GifsContext";
import { CardDetailGif } from "../../components/CardDetailGif";

export function DetailGif({ params }) {
  const { gifs } = useContext(GifContext);
  const { id } = params;

  const gif = gifs.find(singleGif =>( singleGif.id == id) ? singleGif : null);
  return (
    <>
      <CardDetailGif gif={gif} />
   </>
  );
}
