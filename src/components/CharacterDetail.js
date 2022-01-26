import {Link} from 'react-router-dom';

const CharacterDetail = (props) => {
    return (
        <>
        <section>
        <Link to="/">Volver</Link>
                <img
                className="imageStyles" 
                src={props.person.image !== "" ? props.person.image : 'https://img.wallpapersafari.com/desktop/800/450/85/32/TZtkqg.png'} 
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