import { useState, useEffect } from "react";

export function useNearScreen({ elementRef, distance }) {
  const [isNearScreen, setIsNearScreen] = useState(false);

  const onChange = (entries, observer) => {
    if (entries[0].isIntersecting) {
      setIsNearScreen(true);
      observer.disconnect();
    }
  };

  useEffect(
    function () {
      if (!elementRef || !elementRef.current) return;
      const observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(elementRef.current);

      return () => observer.disconnect();
    },
    [elementRef.curre]
  );
  return isNearScreen;
}
