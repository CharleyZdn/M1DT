import React, { Component } from 'react';
import axios from 'axios';
import './Connexion.css';

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _username: '',
      _password: ''
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state._username + " / "+ this.state._password);
    var bodyFormData = new FormData();
    bodyFormData.set('_username', this.state._username);
    bodyFormData.set('_password', this.state._password);
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/login_check',
      data: bodyFormData,
      config: {headers : {'Content-type': 'multipart/form-data'}}
    })
    .then(function(response){
  console.log(response.data); 
  })
  .catch(err => {
    console.log(err);
  })
  ;}

  render() {
    return (
      <div className = "connexion">
        <form className="formulaire" onSubmit={this.handleSubmit}>
          <div className="ensemble_champ">
            <span>Votre username</span> 
            <input type="text" className="champs" id="username" name="_username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
          </div>
          <div className="ensemble_champ">
            <span>Votre mot de passe</span> 
            <input type="password" className="champs" id="mdp" name="_password" value={this.state.password} onChange={this.handleChange} placeholder="Mot de passe"/>
          </div>
          <div className="ensemble_champ">
            <input type="submit" className="champs btn_commencer" value="CONNEXION"/>
          </div>
        </form>
        {/* <Routing/> */}
      </div>
    )
  }
  }

  
export default Connexion;