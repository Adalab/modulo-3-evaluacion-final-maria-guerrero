import "../styles/App.css";
import { useState, useEffect } from "react";
import callToApi from "../services/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

function App() {
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState("gryffindor");
  const [characters, setCharacters] = useState([]);

  // Llamamos a callToApi
  useEffect(() => {
    callToApi(filterHouse).then((charactersData) => {
      setCharacters(charactersData);
    });
    console.log(filterHouse);
  }, [filterHouse]);

  // Función que ejecuta setFilterName. Ésta recibe como parámetro un valor, el cual mete a la variable de estado filterName. Lo vinculamos al select.
  const handleFilter = (info) => {
    if(info.key === 'name') {
      setFilterName(info.value);
    }
    else if(info.key === 'house') {
      setFilterHouse(info.value);
    };
  };

  // Filtro del input
  const filteredCharacters = characters.filter((eachPerson) => {
    return eachPerson.name.toLowerCase()
    .includes(filterName.toLowerCase());
  })
    .filter((eachPerson) => {
      return filterHouse === 'gryffindor' ? true : eachPerson.house === filterHouse;
      /* if(filterHouse === 'gryffindor') {
        return true;
      }
      else {
        return eachPerson.house === filterHouse;
      } */
    });

  return (
    <div>
      <header>
        <h1>Harry Potter</h1>
        <Filters 
        handleFilter={handleFilter} 
        filterName={filterName}
        filterHouse={filterHouse} 
        />
      </header>

      <main>
        <CharactersList characters={filteredCharacters} />
      </main>
      <footer>
        <p>Made with ✨🔮 and ❤️, by &copy;María the wizard. 2022</p>
      </footer>
    </div>
  );
}

export default App;
