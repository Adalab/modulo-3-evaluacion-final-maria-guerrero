import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import callToApi from "../services/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import Header from "./Header";
import Footer from "./Footer";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [filterName, setFilterName] = useState("");
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
    if (info.key === "name") {
      setFilterName(info.value);
    } else if (info.key === "house") {
      setFilterHouse(info.value);
    }
  };

  // Filtro del input
  const filteredCharacters = characters.filter((eachPerson) => {
    return eachPerson.name.toLowerCase().includes(filterName.toLowerCase());
  });

  // Función para el detail
  const renderCharacterDetail = (props) => {
    const routeIdCharacter = props.match.params.characterId;

    const foundCharacterId = characters.find(
      (character) => character.id === routeIdCharacter
    );
    return <CharacterDetail person={foundCharacterId} />;
  };

  return (
    <div>
      <Header />

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
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
