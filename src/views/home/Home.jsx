import { Route, Link } from "wouter";
import { DetailGif } from "../detail/DetailGif";
import { Search } from "../search/Search";
import { HomePage } from "../HomePage";
import { Trends } from "../../components/Trends";


export const Home = () => {
  
  return (
    <> 
        <nav className="navbar">
          <Link href="/gifs/mexico">Gif de mexico</Link>
          <Link href="/gifs/panda">Gif de panda</Link>
          <Link href="/gifs/ecudor">Gif de ecuador</Link>
        </nav>
        <h3> Trends searches </h3>
          <section className="trending-searches-section" >
              <Trends />
          </section>
        <section>
          <Route path='/' component={HomePage} />
          <Route path="/gifs/:keyword" component={Search} />
          <Route path="/gif/detail/:id" component={DetailGif} />
        </section>
    </>
  );
};
