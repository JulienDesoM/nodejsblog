const express = require('express');
const { Tag } = require('../db');

const app = express();

app.use(express.json());

app.get('', async (req, res) => {
    const tags = await Tag.findAll();
    res.json(tags);
  })

app.get('/:id', async (req, res) => {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);
    res.json(tag);
})

app.post('', async (req, res, next) => {
    console.log(req.body);
    try {
        const tag = await Tag.create(req.body);
        res.status(201).json(tag);
    } catch(err) {
        next(err);
    }
})

app.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);
    if(!tag) {
        res.status(404).json({ message: "Not found" });
    } else {
        for(let k in req.body) {
            tag.set(k, req.body[k]);
        }
        await tag.save();
        res.status(200).json(tag)
    }
})

app.delete('/:id', async (req, res , next) => {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);
    if(!tag){
        res.status(404).json({ message: "Not found" });
    } else  {
        await tag.destroy();
        res.status(204).end();
        
    }
})

module.exports = app;
