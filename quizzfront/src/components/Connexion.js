import React, { Component } from 'react';
import './Connexion.css';

class Connexion extends Component {
  render() {
    return (
      <div className = "connexion">
        <div className="formulaire">
          <div className="ensemble_champ">
            <span>Votre Email</span> 
            <input type="text" className="champs" id="email" placeholder="Email"/>
          </div>
          <div className="ensemble_champ">
            <span>Votre mot de passe</span> 
            <input type="password" className="champs" id="mdp" placeholder="Mot de passe"/>
          </div>
          <div className="ensemble_champ">
            <input type="button" className="champs btn_commencer" value="CONNEXION"/>
          </div>
        </div>
        {/* <Routing/> */}
      </div>
    )
  }
}


export default Connexion;