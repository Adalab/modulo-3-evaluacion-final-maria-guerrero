import "../styles/App.css";
import { useState, useEffect } from "react";
import callToApi from "../services/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

function App() {
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState("griffindor");
  const [characters, setCharacters] = useState([]);

  // Llamamos a callToApi
  useEffect(() => {
    callToApi().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  // Función que ejecuta setFilterName. Ésta recibe como parámetro un valor, el cual mete a la variable de estado filterName
  const handleFilterName = (info) => {
    setFilterName(info)
  }

  // Filtro del input
  const filteredCharacters = characters.filter((eachPerson) => {
    return eachPerson.name.toLowerCase().includes(filterName.toLowerCase());
  });

  return (
    <div>
      <header>
        <h1>Harry Potter</h1>
        <Filters handleFilterName={handleFilterName} />
      </header>

      <main>
        <CharactersList characters={filteredCharacters} />
      </main>
      <footer>
        <p>Made with ✨🔮 and ❤️, by the wizard María</p>
      </footer>
    </div>
  );
}

export default App;
