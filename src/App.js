import { name, tagline, bio, badges, buttons } from "./config";
import './App.css';
import avatar from "./assets/img/avatar.png";

function App() {
  return (
    <div className="App vstack flex-start" dir="ltr">
      <div className="menu hstack space-between snap-point">
        <p>item</p>
        <p>item</p>
        <p>item</p>
      </div>

      <div className="hero hstack waves snap-point">
        <div className="vstack">
          <h1>{tagline}</h1>
          <div className="buttons hstack flex-start">
            {buttons.map((data, key) =>
              <a className="button-primary" href={data.url}>
                {data.name}
              </a>
            )}
          </div>
        </div>
        <img src={avatar} className="avatar" />
      </div>
      <div className="bio vstack snap-point">
        <h3>About Me</h3>
        <p>{bio}</p>
      </div>

      <div className="badges hstack">
        {badges.map((data, key) =>
          <div className="badge">

          </div>
        )}
      </div>

    </div>
  );
}

export default App;
