// En este componente vamos a meter todo el <ul>, la lista completa

import Characters from "./Characters";

const CharactersList = (props) => {

    const charactersElement = props.characters.map((person) => {
        return (
            <li className="card" key={person.id}>
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