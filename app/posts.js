// Posts API

const express = require('express');
const { Post } = require('../db');

const app = express();

// écrire l'API posts ici :-)
// l'API posts est montée sur /posts
//  => ici, l'URI '/' correspondra à /posts/ et l'URI '' correspondra à '/posts'

// Lister tous les BlogPost
app.get('', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
})

// Récupérer le contenu d'un seul BlogPost
app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByPk(id);
  res.json(post);
})

app.get('/:title', async (req, res) => {
  const { title } = req.params;
  const post = await Post.findOne(title);
  res.json(post);
})


app.post('', async (req, res, next) => {
  console.log(req.body);
  try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
  } catch(err) {
      next(err);
  }
})

module.exports = app;
