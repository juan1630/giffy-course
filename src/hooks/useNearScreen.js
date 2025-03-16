import { useState, useEffect } from "react";

export function useNearScreen({
  elementRef,
  distance = "100px",
  once = false,
}) {
  let observer
  const [isNearScreen, setIsNearScreen] = useState(false);

  const onChange = (entries, observer) => {
 
    if (entries[0].isIntersecting) {
      setIsNearScreen(true);
      (once) ? observer.disconnect() : ''
    } else {
     setIsNearScreen(false);
    }
  };

  useEffect(
    function () {
      if (!elementRef || !elementRef.current) return;
       observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(elementRef.current);

      return () => observer.disconnect();
    },
    [elementRef.current]
  );
  return isNearScreen;
}
