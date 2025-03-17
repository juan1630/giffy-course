import React from "react";
import { Link } from "wouter";

function Gif({ title, id, url }) {
  return (
    <>
      <div className="card-gif">
        <img src={url} alt={title} />
        <Link className="title-redirect" href={`/gif/detail/${id}`}>
          {title}
        </Link>
      </div>
    </>
  );
}


export default React.memo(Gif, (prevProps, nextProps) => prevProps.id === nextProps.id);