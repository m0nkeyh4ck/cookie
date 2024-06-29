// main.js

const AuthApiManager = require('./AuthApiManager');
const TokenApiManager = require('./TokenApiManager');

const apiUrl = 'http://localhost:3000/api/auth/signin';
const tokenApiUrl = 'http://localhost:4000/generateToken';

const authManager = new AuthApiManager(apiUrl);
const tokenManager = new TokenApiManager(tokenApiUrl);

const username = 'chucho';
const password = 'chucho123';

authManager.iniciarSesion(username, password)
  .then(userData => {
    console.log('Inicio de sesión exitoso!', userData);
    return tokenManager.obtenerToken(userData); // Pass userData to obtain token
  })
  .then(token => {
    // Additional actions after successful login and token retrieval
    console.log('Token obtenido exitosamente:', token);
    // You can perform further operations here
  })
  .catch(error => {
    console.error('Error al iniciar sesión:', error.message);
  });
