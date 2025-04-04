import { useState } from "react";

import { Home } from "./views/home/Home";

import GifContext from "./context/GifsContext";
import { Header } from "../src/components/Header";
import { UserContext } from "./context/UserContext";

import "./App.css";

function App() {
  const [gifs, setGifs] = useState([]);
  const [favs, setFavs] = useState([]);

  const [jwt, setJwt] = useState(
    () => window.sessionStorage.getItem('jwt')
  );
  const initialValue = {
    name: "Jose",
    id: "123",
  };

  return (
    <UserContext.Provider value={{ jwt, setJwt, favs, setFavs }}>
      <GifContext.Provider value={{ gifs, setGifs }}>
        <Header />
        <Home />
      </GifContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
