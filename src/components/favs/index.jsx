import { useLocation } from "wouter";
import { useUserGifs } from "../../hooks/useUserGifs";

export const Fav = ({ id }) => {
  const { isLogged, addFavs, favs } = useUserGifs();
  const [, navigate] = useLocation();
  const isFaved = favs.some((favId) => favId == id);

  const [label, emoji] = isFaved
    ? ["Removed gif from favorites", "❌"]
    : ["Add gif to favorites", "❤️"];

  const handleClick = () => {
    if (!isLogged) return navigate("/login");
    addFavs({ id });
  };

  return (
    <>
      <button onClick={handleClick}>
        <span role="img" aria-label={label}>
          {emoji}
        </span>
      </button>
    </>
  );
};
