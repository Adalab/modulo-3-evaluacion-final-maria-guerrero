// En este componente vamos a meter todo el <ul>, la lista completa

import Characters from "./Characters";

const CharactersList = (props) => {

    const charactersElement = props.characters.map((person, index) => {
        return (
            <li className="card" key={index}>
                <Characters person={person} />
            </li>
        );
    });

    return (
        <section className="sectionCards">
          <ul className="cards">
              {charactersElement}
          </ul>
        </section>
    );
};

export default CharactersList;