import React, { Component } from 'react';
import './Connexion.css';

class Connexion extends Component {
  render() {
    return (
      <div className = "connexion">
        <div class="formulaire">
          <div class="ensemble_champ">
            <span>Votre Email</span> 
            <input type="text" class="champs" id="email" placeholder="Email"/>
          </div>
          <div class="ensemble_champ">
            <span>Votre mot de passe</span> 
            <input type="password" class="champs" id="mdp" placeholder="Mot de passe"/>
          </div>
          <div class="ensemble_champ">
            <input type="button" class="champs btn_commencer" value="CONNEXION"/>
          </div>
        </div>
        {/* <Routing/> */} 
      </div>
    )
  }
}


export default Connexion;