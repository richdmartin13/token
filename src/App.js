import { name, tagline, bio, badges, buttons } from "./config";
import './App.css';

function App() {
  return (
  <section className="waves">
    <div className="App vstack">
      <div className="hstack">
        <div className="hstack">
          <div className="card hstack">
            <div className="vstack">
              <h2 className="intro">{name}</h2>
              <h3 className="intro">{tagline}</h3>
            </div>
          </div>
        </div>
        <div className="buttons hstack">
          {buttons.map((data, key) =>
          <div className="button">

          </div>
        )}
        </div>
        <div className="bio vstack">
          <h3>About Me</h3>
          <p>{bio}</p>
        </div>
      </div>
      <br></br>
      <div className="badges hstack">
        {badges.map((data, key) =>
          <div className="badge">

          </div>
        )}
      </div>
    </div>
    </section>
  );
}

export default App;
