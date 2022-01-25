import "../styles/App.scss";
import img from '../images/logo.png';
import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
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
    

  return (
    <div>
      <header className="header">
        <img className="logo" src={img} alt="" />
            <Filters 
            handleFilter={handleFilter} 
            filterName={filterName}
            filterHouse={filterHouse} 
            />
          
        </header>

        <main className="main">
          <CharactersList characters={filteredCharacters} />
        </main>     

      <footer>
        <p>Made with ✨🔮 and ❤️, by &copy;María the wizard. 2022</p>
      </footer>
    </div>
  );
}

export default App;
