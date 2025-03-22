import { useState, useEffect, useContext } from "react";
import getGifById from "../helpers/getGifById";
import GifContext from "../context/GifsContext";

function useSingleGif({ id }) {
  const { gifs } = useContext(GifContext);
  const [isLoadingState, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const singleGif = gifs.find((singleGif) => singleGif.id == id);
  const [gif, setGif] = useState(singleGif);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getGifById(id)
        .then((data) => {
          if(data == "Error" || data == undefined){
            setHasError(true);
            return
          }else {
            setGif(data)
          }
        })
        .catch((error) => {
          setHasError(true);
        });
        setIsLoading(false)
    }
  }, [id, gif]);
  return { gif, hasError, isLoadingState };
}

export default useSingleGif;
