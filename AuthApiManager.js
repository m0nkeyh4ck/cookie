// AuthApiManager.js

const axios = require('axios');

class AuthApiManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    this.userData = {};
  }

  iniciarSesion(username, password) {
    const formData = { username, password };

    return axios.post(this.apiUrl, formData, this.config)
      .then(response => {
        if (response.status === 200 && response.data.status === 'success') {
          this._setUserData(response.data.data);
          console.log(`Sesión iniciada - ID: ${this.userData.id}, Username: ${this.userData.username}`);
          return this.userData;
        } else {
          throw new Error('Credencial incorrecta');
        }
      })
      .catch(error => {
        throw new Error('Credencial incorrecta');
      });
  }

  _setUserData(userData) {
    this.userData = {
      id: userData.id,
      username: userData.username
    };
  }
}

module.exports = AuthApiManager;
