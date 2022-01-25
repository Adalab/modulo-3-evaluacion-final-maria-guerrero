// En este componente vamos a meter todo el <ul>, la lista completa

import Characters from "./Characters";

const CharactersList = (props) => {

    const charactersElement = props.characters.map((person, index) => {
        return (
            <li key={index}>
                <Characters person={person} />
            </li>
        );
    });

    return (
        <section>
          <ul className="cards">
              {charactersElement}
          </ul>
        </section>
    );
};

export default CharactersList;