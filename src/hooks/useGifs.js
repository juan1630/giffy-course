import { useEffect, useContext } from "react";
import getGifts from "../helpers/getGitfs";
import GifContext from "../context/GifsContext";

export function useGifs(keyword = 'batman') {
  const { gifs, setGifs } = useContext(GifContext);


  useEffect(
    function () {
      keyword ? keyword : localStorage.getItem("lastKeyword") || 'null';
      getGifts(keyword)
        .then((gifs) => {
          localStorage.setItem("lastKeyword", keyword);
          setGifs(gifs);
        })
        .catch((error) => console.log(error));
    },
    [keyword, setGifs]
  );

  return { gifs };
}
