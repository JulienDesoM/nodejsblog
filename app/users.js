// Users API

const express = require('express');
const { User } = require('../db');

const app = express();

app.use(express.json());

app.get('', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  })

app.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json(user);
})

app.post('', async (req, res, next) => {
    console.log(req.body);
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch(err) {
        next(err);
    }
})

app.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if(!user) {
        res.status(404).json({ message: "Not found" });
    } else {
        for(let k in req.body) {
            user.set(k, req.body[k]);
        }
        await user.save();
        res.status(200).json(user)
    }
})

app.delete('/:id', async (req, res , next) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if(!user){
        res.status(404).json({ message: "Not found" });
    } else  {
        await user.destroy();
        res.status(204).end();
        
    }
})
// écrire l'API users ici :-)

module.exports = app;
