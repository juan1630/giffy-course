import { Link } from "wouter";

export default function Gif({ title, id, url }) {
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
