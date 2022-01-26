import img from '../images/logo-white.png';
import hedwig from '../images/hedwig.png';
import hpotter from '../sound/background-sound.mp3';

const Header = () => {
    return (
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
    )
}

export default Header;
