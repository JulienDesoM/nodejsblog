// Posts API

const express = require('express');
const { Post } = require('../db');

const app = express();

// écrire l'API posts ici :-)
// l'API posts est montée sur /posts
//  => ici, l'URI '/' correspondra à /posts/ et l'URI '' correspondra à '/posts'

// Lister tous les BlogPost
app.get('', (req, res) => {
  // res.end() ferme la chaîne de traitement, status 204 => 204 NO CONTENT
  //  Ceci est une réponse vide, à remplacer par votre implémentation.
  res.send("Liste des posts")
});

// Récupérer le contenu d'un seul BlogPost
app.get('/:postid', (req, res, next) => {
  const { postid } = req.params;
  // ici, la variable postid contient la valeur passée dans l'URI
  //    /posts/123  => postid = 123;
  res.status(204).end();
})

module.exports = app;
