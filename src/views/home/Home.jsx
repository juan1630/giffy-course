import { Route, Link } from "wouter";
import { DetailGif } from "../detail/DetailGif";
import { Search } from "../search/Search";
import { HomePage } from "../HomePage";
import LazyTrending from "../../components/LazyTrending";

export const Home = () => {
  return (
    <>
      <nav className="navbar">
        <Link href="/gifs/mexico">Gif de mexico</Link>
        <Link href="/gifs/panda">Gif de panda</Link>
        <Link href="/gifs/ecudor">Gif de ecuador</Link>
      </nav>
      <section>
        <Route path="/" component={HomePage} />
        <Route path="/gifs/:keyword/:raiting?" component={Search} />
        <Route path="/gif/detail/:id" component={DetailGif} />
        <Route path="/404" component={ () => <h2> ERROR 404  :(  </h2> } />
      </section>
      <h3> Trends searches </h3>
      <section>
        <LazyTrending />
      </section>
    </>
  );
};
