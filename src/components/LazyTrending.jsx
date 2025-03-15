import { Suspense, lazy, useRef } from "react";
import { useNearScreen } from "../hooks/useNearScreen";
const TrendingSearches = lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
  const elementRef = useRef(null);
  const isNearScreen = useNearScreen({ elementRef, distance: "1000px" });

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Loading />}>
        {isNearScreen ? <TrendingSearches /> : <Loading />}
      </Suspense>
    </div>
  );
}

function Loading() {
  return <h3> Loading...</h3>;
}
