const express = require('express');
const { User } = require('../db');

const app = express();
/*
app.use((req, res, next) => {
  // middleware d'authentification
  //  header : Authorization au format Bearer avec le JWT
  //  => on décode le header pour valider le JWT puis récupére
  //  le user courant (User.findByPk avec l'ID)
  //  => req.user = user courant (récupéré depuis la DB)
  //  le user courant peut être null

  //  Lorsque l'on a besoin de l'utilisateur courant, on vérifie si req.user est à null ou non.
  //  Si null => 401
  //  Sinon => on continue l'exécution du contrôleur

  //  ===> Il y a donc un 2e middleware à injecter dans les contrôleurs requérant l'authentification
});
*/

// (/route,    (fichier))
app.use('/users', require('./users'));
app.use('/posts', require('./posts'));
app.use('/comments', require('./comments'));
app.use('/tags', require('./tags'));

// app.use('/session', require('./session'));


app.get('/', (req, res, next) => {
  res.send('Hello World !');
});


// Middleware de gestion d'erreurs
app.use((err, req, res, next) => {
  res.status(500).json({ err });
});

module.exports = { app };
