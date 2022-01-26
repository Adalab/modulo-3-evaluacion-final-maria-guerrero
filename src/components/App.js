import "../styles/App.scss";
import img from '../images/logo-white.png';
import hedwig from '../images/hedwig.png';
import hpotter from '../sound/background-sound.mp3';
import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import callToApi from "../services/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import CharacterDetail from './CharacterDetail';

function App() {
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState("gryffindor");
  const [characters, setCharacters] = useState([]);

  // Llamamos a callToApi
  useEffect(() => {
    callToApi(filterHouse).then((charactersData) => {
      setCharacters(charactersData);
    });
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

  // Función para el detail
  const renderCharacterDetail = (props) => {
    const routeIdCharacter = props.match.params.characterId;

    const foundCharacterId = characters.find((character) => character.id === routeIdCharacter);
    return <CharacterDetail person={foundCharacterId} />
  };

  return (
    <div>
      <header className="header">
        <div className="hpMusic">
        <audio id="hpMusic" type="audio/mp3" controls autoPlay>
          {" "}
          <source src={hpotter} />
        </audio>
        </div>
        <img className="logo" src={img} alt="Foto" />
        <img className="hedwig" src={hedwig} alt="" />
      </header>

      <main className="main">
      <Switch>
        <Route path="/" exact>
            <Filters 
            handleFilter={handleFilter} 
            filterName={filterName}
            filterHouse={filterHouse} 
            />    
          <CharactersList characters={filteredCharacters} />
          </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
        </main>     

      <footer className="footer">
        <div className="divFooter">
        <p>Made with ✨🔮 and ❤️,</p>
        <p>by &copy;María, the wizard. 2022</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
