import { useState } from 'react';
import { Home } from "./views/home/Home";
import StaticContext from "./context/StaticContext";
import GifContext from "./context/GifsContext";
import "./App.css";

function App() {
  const [gifs, setGifs] = useState([])
  const initialValue = {
    name: "Jose",
    id: "123",
  };

  return (
    <StaticContext.Provider value={initialValue} >
      <GifContext.Provider value={{ gifs, setGifs }} >
      <Home />
      </GifContext.Provider>
    </StaticContext.Provider>
  );
}

export default App;
