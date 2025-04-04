import React from "react";
import { Link } from "wouter";
import { Fav } from "../components/favs/index";

function Gif({ title, id, url }) {
  return (
    <>
      <div className="card-gif">
        <div className="gif-buttons">
          <Fav id={id} />
        </div>
        <img src={url} alt={title} />
        <Link className="title-redirect" href={`/gif/detail/${id}`}>
          {title}
        </Link>
      </div>
    </>
  );
}

export default React.memo(
  Gif,
  (prevProps, nextProps) => prevProps.id === nextProps.id
);
