import {Link} from 'react-router-dom';

const CharacterDetail = (props) => {
    return (
        <>
        <section>
        <Link to="/">Volver</Link>
                <img 
                src={props.person.image} 
                alt={`Foto de ${props.person.name}`}
                title={`Foto de ${props.person.name}`}
            />
            <h1>{props.person.name}</h1>
            <p>{props.person.alive}</p>
            <p>{props.person.species}</p>
            <p>{props.person.gender}</p>
            <p>{props.person.house}</p>
        </section>
        </>
    )
}

export default CharacterDetail;