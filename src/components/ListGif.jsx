import Gif from "./Gif";

export function ListGif({ gifs }) {
  return (
    <>
      <section className="container-gifs">
        {gifs.map((gif) => (
          <Gif id={gif.id} title={gif.title} url={gif.url} key={gif.id} />
        ))}
      </section>
    </>
  );
}
