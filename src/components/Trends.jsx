import { useState, useEffect } from "react";
import { getTrendingTerms } from "../helpers/getTredingTerms";
import { Link } from "wouter";

export const Trends = () => {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingTerms().then((data) => {
      setTrends(data);
    });
  }, []);

  return (
    <>
      {trends.map((trend) => (
        <Link key={trend} className="title-redirect" href={`/gifs/${trend}`}>
          {trend}
        </Link>
      ))}
    </>
  );
};
