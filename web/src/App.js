import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={(e) => setGithub_username(e.target.value)}/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={(e) => setTechs(e.target.value)}/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/16194059?s=460&v=4" alt="Camila Sales" />
              <div className="user-info">
                <strong>Camila Sales</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Hi, nice to see you here :)</p>
            <a href="https://github.com/salescamila">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/16194059?s=460&v=4" alt="Camila Sales" />
              <div className="user-info">
                <strong>Camila Sales</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Hi, nice to see you here :)</p>
            <a href="https://github.com/salescamila">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/16194059?s=460&v=4" alt="Camila Sales" />
              <div className="user-info">
                <strong>Camila Sales</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Hi, nice to see you here :)</p>
            <a href="https://github.com/salescamila">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/16194059?s=460&v=4" alt="Camila Sales" />
              <div className="user-info">
                <strong>Camila Sales</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Hi, nice to see you here :)</p>
            <a href="https://github.com/salescamila">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
