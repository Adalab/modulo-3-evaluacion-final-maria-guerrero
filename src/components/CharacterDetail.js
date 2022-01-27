import {Link} from 'react-router-dom';
import GryffindorEmblem from '../images/gryffindor.png';

const CharacterDetail = (props) => {

    const emblemChange = () => {
        if (props.person.house === 'gryffindor') {
          return GryffindorEmblem;
        }
      }

    return (
        <>
        <section className="sectionDetailPage">
        <img className="gryffindorEmblem" src={emblemChange()} alt="gryffindor" />
        <Link className="back" to="/">Back</Link>
                <div className="divInfoDetail">
                <img
                className="imageDetailsStyles" 
                src={props.person.image !== "" ? props.person.image : 'https://img.wallpapersafari.com/desktop/800/450/85/32/TZtkqg.png'} 
                alt={`Foto de ${props.person.name}`}
                title={`Foto de ${props.person.name}`}
            />
            <div className="infoDetail">
            <h1>{props.person.name}</h1>
            <p>State: {props.person.alive === 'false' ? 'dead' : 'alive'}</p>
            <p>Specie: {props.person.species}</p>
            <p>Gender: {props.person.gender}</p>
            <p>Hogwarts house: {props.person.house}</p>
            </div>
            </div>
        </section>
        </>
    )
}

export default CharacterDetail;