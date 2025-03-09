import { useState, useEffect } from "react";
import { getTrendingTerms } from "../../helpers/getTredingTerms";
import { ListGif } from "../ListGif";

export const TrendingTerms = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingTerms()
      .then((data) => {
        setTrends(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ListGif gifs={trends} />
    </>
  );
};
