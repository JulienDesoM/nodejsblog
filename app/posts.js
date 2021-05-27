// Posts API

const express = require('express');
const { Post, User } = require('../db');

const app = express();

app.use(express.json());

// écrire l'API posts ici :-)
// l'API posts est montée sur /posts
//  => ici, l'URI '/' correspondra à /posts/ et l'URI '' correspondra à '/posts'

// Lister tous les BlogPost
app.get('', async (req, res) => {
  const { title, q, tags } = req.query;

  let where = {};

  if(title) {
    where.title = title;
  }

  if(q) {
    // un peu plus compliqué, il faut ajouter un LIKE
  }

  if(tags) {
    // dépend du modèle de données, tags fait appel à la jointure (à priori) et
    // requiert une utilisation des recherches par association.
  }


  const posts = await Post.findAll({ where });

  res.json(posts);
})

// Récupérer le contenu d'un seul BlogPost
app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByPk(id);
  res.json(post);
})

// Première approche pour une recherche par titre
//  Note du prof : intéressant mais pas tout à fait dans l'esprit de REST. URI = ressource ;-).
app.get('/by-title/:title', async (req, res) => {
  const { title } = req.params;
  const post = await Post.findOne({ where: { title } });
  res.json(post);
})


app.post('', async (req, res, next) => {
  console.log(req.body);
  try {
      const post = new Post(req.body);
      post.setUser(1);
      await post.save();
      res.status(201).json(post);
  } catch(err) {
      console.log(err);
      next(err);
  }
})

app.delete('/:id', async (req, res , next) => {
  const { id } = req.params;
  const post = await Post.findByPk(id);
  if(!post){
      res.status(404).json({ message: "Not found" });
  } else  {
      await post.destroy();
      res.status(204).end();
      
  }
})

module.exports = app;
