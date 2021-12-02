import { name, tagline, bio, badges, buttons } from "./config";
import './App.css';
import { configure } from "@testing-library/dom";

function App() {
  return (
    <div className="App vstack">
      <div className="hstack">
        <div className="card hstack">
          
        </div>
      </div>
      <div className="buttons hstack">
      {buttons.map((data, key) =>
          <div className="button">

          </div>
        )}
      </div>
      <div className="bio vstack">
        <div className="hstack" style={{"width":"100%", "justify-content": "center"}}>
          <h2>{name}</h2>
        </div>
        <h3>{tagline}</h3>
        <hr></hr>
        <br/>
        <h3>About Me</h3>
        <p>{bio}</p>
      </div>
      <br></br>
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
