import React, { Component } from 'react';


class Inscription extends Component {
  render() {
    return (
      <div className = "Inscription">
        <div className="formulaire">
        <div className="ensemble_champ">
            <span>Votre Pseudo</span> 
            <input type="text" className="champs" id="pseudo" placeholder="Pseudo"/>
          </div>
          <div className="ensemble_champ">
            <span>Votre Email</span> 
            <input type="text" className="champs" id="email" placeholder="Email"/>
          </div>
          <div className="ensemble_champ">
            <span>Votre mot de passe</span> 
            <input type="password" className="champs" id="mdp" placeholder="Mot de passe"/>
          </div>
          <div className="ensemble_champ">
            <span>Confimer le mot de passe</span> 
            <input type="password" className="champs" id="mdpconfirme" placeholder="Confirmer"/>
          </div>
          <div className="ensemble_champ">
            <input type="button" className="champs btn_commencer" value="Inscription"/>
          </div>
        </div>
        {/* <Routing/> */} 
      </div>
    )
  }
}


export default Inscription;