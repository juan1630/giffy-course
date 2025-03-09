import Gif from '../components/Gif'
export const CardDetailGif = ({gif}) => {

  return (
    <article className="container-detail-gif">
        <section>
          <Gif id={gif.id} title={gif.title} url={gif.url} />
        </section>
    </article>
  );
};
