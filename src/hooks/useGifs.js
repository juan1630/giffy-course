import { useEffect, useContext, useState } from "react";
import getGifts from "../helpers/getGitfs";
import GifContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs(keyword = 'batman', raiting) {

  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifContext);

  const keywordToUse = keyword ? keyword : localStorage.getItem("lastKeyword") || 'null';

  useEffect(
    function () {
      getGifts({ search:keyword, raiting })
        .then((gifs) => {
          localStorage.setItem("lastKeyword", keyword);
          setGifs(gifs);
        })
        .catch((error) => console.log(error));
    },
    [keyword, keywordToUse,setGifs, raiting]
  );

  useEffect(function(){
    if(page == INITIAL_PAGE) return;
    getGifts({search: keyword, limit:25, page, raiting}).then(
      nextGif => setGifs(prevGifs => prevGifs.concat(nextGif))
    )
  }, [page, keywordToUse, raiting]);

  return { gifs, setPage };
}
