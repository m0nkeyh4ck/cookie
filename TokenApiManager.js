// TokenApiManager.js

const axios = require('axios');

class TokenApiManager {
  constructor(tokenApiUrl) {
    this.tokenApiUrl = tokenApiUrl;
    this.config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  obtenerToken(userData) {
    return axios.post(this.tokenApiUrl, userData, this.config)
      .then(response => {
        if (response.status === 200) {
          //console.log('Token obtenido:', response.data.token);
          return response.data.token;
        } else {
          throw new Error('No se pudo obtener el token');
        }
      })
      .catch(error => {
        throw new Error('No se pudo obtener el token');
      });
  }
}

module.exports = TokenApiManager;
