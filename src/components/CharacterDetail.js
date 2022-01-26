import {Link} from 'react-router-dom';

const CharacterDetail = (props) => {
    return (
        <>
        <section className="sectionDetailPage">
        <Link className="back" to="/">Back</Link>
                <img
                className="imageStyles" 
                src={props.person.image !== "" ? props.person.image : 'https://img.wallpapersafari.com/desktop/800/450/85/32/TZtkqg.png'} 
                alt={`Foto de ${props.person.name}`}
                title={`Foto de ${props.person.name}`}
            />
            <h1>{props.person.name}</h1>
            <p>State: {props.person.alive === 'false' ? 'Dead' : 'Alive'}</p>
            <p>Specie: {props.person.species}</p>
            <p>Gender: {props.person.gender}</p>
            <p>Hogwarts house: {props.person.house}</p>
        </section>
        </>
    )
}

export default CharacterDetail;