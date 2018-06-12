import React, { Component } from 'react';


class Inscription extends Component {
  render() {
    return (
      <div className = "Inscription">
        <div class="formulaire">
        <div class="ensemble_champ">
            <span>Votre Pseudo</span> 
            <input type="text" class="champs" id="pseudi" placeholder="Pseudo"/>
          </div>
          <div class="ensemble_champ">
            <span>Votre Email</span> 
            <input type="text" class="champs" id="email" placeholder="Email"/>
          </div>
          <div class="ensemble_champ">
            <span>Votre mot de passe</span> 
            <input type="password" class="champs" id="mdp" placeholder="Mot de passe"/>
          </div>
          <div class="ensemble_champ">
            <span>Confimer le mot de passe</span> 
            <input type="password" class="champs" id="mdpconfirme" placeholder="Confirmer"/>
          </div>
          <div class="ensemble_champ">
            <input type="button" class="champs btn_commencer" value="Inscription"/>
          </div>
        </div>
        {/* <Routing/> */} 
      </div>
    )
  }
}


export default Inscription;