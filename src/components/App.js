import '../styles/App.css';
import { useState, useEffect } from 'react';

function App() {

  return (
    <div>

      <header>
        <h1>Harry Potter</h1>
        <form>
          <label htmlFor="name">Busca por personaje:</label>
          <input 
          type="text"
          name="name"
          id="name"
          />
        </form>

        <label htmlFor="select">Selecciona la casa</label>
        <select name="select" id="select">
          <option value="griffindor">Griffindor</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="slytherin">Slytherin</option>
        </select>
      </header>

      <main>
        <section>
          <ul>
            <li>
              <img 
              src="#" 
              alt="Foto de Harry Potter" 
              title="Foto de Harry Potter" 
              />
              <h1>Harry Potter</h1>
              <p>Humano</p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Made with ✨🔮 and ❤️, by the wizard María</p>
      </footer>
    </div>
  );
}

export default App;
