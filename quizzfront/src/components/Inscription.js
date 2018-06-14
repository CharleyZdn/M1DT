import React, { Component } from 'react';
import axios from 'axios';


class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      isActive: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
  if (this.state.password === this.state.password2){  
   

  axios({
    method: 'post',
    url: 'http://localhost:8000/api/app_users',
    data: {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      isActive: true
    }
  });
    
    alert('Vous êtes désormais inscrit : ' + this.state.username);
    event.preventDefault();
  }

  else {
    console.log('eee');
  }
}    

  render() {
    return (
      <div className = "Inscription">
        <form className="formulaire" onSubmit={this.handleSubmit}>
        <div className="ensemble_champ">
            <span>Votre Pseudo</span> 
            <input type="text" className="champs" id="pseudo" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Pseudo"/>
          </div>
          <div className="ensemble_champ">
            <span>Votre Email</span> 
            <input type="email" className="champs" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
          </div>
          <div className="ensemble_champ">
            <span>Votre mot de passe</span> 
            <input type="password" className="champs" id="mdp" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Mot de passe"/>
          </div>
          <div className="ensemble_champ">
            <span>Confimer le mot de passe</span> 
            <input type="password" className="champs" name="password2" value={this.state.password2} onChange={this.handleChange} id="mdpconfirme" placeholder="Confirmer"/>
          </div>
          <div className="ensemble_champ">
            <input type="submit" className="champs btn_commencer" value="S'inscrire"/>
          </div>
        </form>
        {/* <Routing/> */} 
      </div>
    )
  }
}


export default Inscription;