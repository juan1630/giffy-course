import { useState, useEffect } from "react";
import { getTrendingTerms } from "../helpers/getTredingTerms";
import { Link } from "wouter";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    getTrendingTerms().then((data) => {
      setTrends(data);
    });
  }, []);

  return (
    <>
      <div className="trending-searches-section">
        {trends.map((trend) => (
          <Link key={trend} className="title-redirect" href={`/gifs/${trend}`}>
            {trend}
          </Link>
        ))}
      </div>
    </>
  );
}
