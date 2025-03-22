import { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce";
import { ListGif } from "../../components/ListGif";
import { useGifs } from "../../hooks/useGifs";
import { useNearScreen } from "../../hooks/useNearScreen";
import { Helmet } from "react-helmet";
import "./search.css";

export const Search = ({ params }) => {
  const fromRef = useRef(null);
  const isNearScreen = useNearScreen({
    elementRef: fromRef,
    distance: "100px",
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prev) => prev + 1), 1000),
    []
  );

  useEffect(
    function () {
      if(isNearScreen) debounceHandleNextPage()
    },
    [isNearScreen, debounceHandleNextPage]
  );
  const { keyword } = params;
  const { gifs, setPage } = useGifs(keyword);
  
  const title = (keyword) ? `${gifs.length} gifs de ${keyword}` : ""

  return (
    <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
      <h3 className="App-title">{decodeURI(keyword)}</h3>
      <ListGif gifs={gifs} />
      <div id="visor" ref={fromRef}></div>
      <button className="btn" onClick={() => console.log("hola")}>
        Next page
      </button>
    </>
  );
};
