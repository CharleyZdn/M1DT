import React from "react";
import Connexion from './Connexion';
import Inscription from './Inscription';
import Themes from './Themes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/connexion">Connexion</Link>
        </li>
        <li>
          <Link to="/inscription">Inscription</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Themes} />
      <Route path="/connexion" component={Connexion} />
      <Route path="/inscription" component={Inscription} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <Themes/>
  </div>
);

const connexion = () => (
  <div>
    <Connexion/>
  </div>
);
const inscription = () => (
    <div>
      <Inscription/>
    </div>
  );



export default Routes;