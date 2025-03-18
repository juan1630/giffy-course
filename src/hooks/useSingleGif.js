import { useState, useEffect, useContext } from "react";
import getGifById from "../helpers/getGifById";
import GifContext from "../context/GifsContext";

function useSingleGif({ id }) {
  const { gifs } = useContext(GifContext);

  const singleGif = gifs.find((singleGif) => singleGif.id == id);
  const [gif, setGif] = useState(singleGif);


  useEffect(() => {
    if (!gif) {
      getGifById(id)
        .then((data) => setGif(data))
        .catch((error) => console.log(error));
    }
  }, [id, gif]);
  return { gif };
}

export default useSingleGif;
