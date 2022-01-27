import {Link} from 'react-router-dom';
import GryffindorEmblem from '../images/gryffindor.png';
import RavenclawEmblem from '../images/ravenclaw.png';
import SlytherinEmblem from '../images/slytherin.png';
import HufflepuffEmblem from '../images/hufflepuff.png';

const CharacterDetail = (props) => {

    const emblemChange = () => {
        if (props.person.house === 'Gryffindor') {
          return GryffindorEmblem;
        } 
        else if(props.person.house === 'Ravenclaw') {
          return RavenclawEmblem
        }
        else if(props.person.house=== 'Slytherin') {
          return SlytherinEmblem;
        }
        else if(props.person.house === 'Hufflepuff')
        return HufflepuffEmblem;
      }

    return (
        <>
        <section className="sectionDetailPage">
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
            <img className="housesEmblem" src={emblemChange()} alt="Emblem" />
            </div>
            </div>
        </section>
        </>
    )
}

export default CharacterDetail;