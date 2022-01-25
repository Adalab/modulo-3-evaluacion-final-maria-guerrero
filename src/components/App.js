import "../styles/App.css";
import { useState, useEffect } from "react";
import callToApi from "../services/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

function App() {
  const [selectHouse, setSelectHouse] = useState("griffindor");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    callToApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>Harry Potter</h1>
        <Filters />
      </header>

      <main>
        <CharactersList characters={characters} />
      </main>
      <footer>
        <p>Made with ✨🔮 and ❤️, by the wizard María</p>
      </footer>
    </div>
  );
}

export default App;
