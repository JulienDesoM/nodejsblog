const express = require('express');

const app = express();

// (/route,    (fichier))
app.use('/users', require('./users'));
app.use('/posts', require('./posts'));
app.use('/comments', require('./comments'));
app.use('/tags', require('./tags'));


app.get('/', (req, res, next) => {
  res.send('Hello World !');
});


// Middleware de gestion d'erreurs
app.use((err, req, res, next) => {
  res.status(500).json({ err });
});

module.exports = { app };
