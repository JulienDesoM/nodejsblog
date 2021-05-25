// Users API

const express = require('express');
const { User } = require('../db');

const app = express();

app.get('', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  })

app.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ id });
    res.json(user);
})

// écrire l'API users ici :-)

module.exports = app;
