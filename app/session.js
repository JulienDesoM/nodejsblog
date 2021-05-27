const express = require('express');
const app = express();

const secret = 'my_super_secret_uwu';

app.post('/token', (req, res) => {
    // req.body : username, password
    // valider le couple username password => validation hash
    // ensuite prendre l'ID de l'utilisateur validé
    //  payload = { sub: id_utilisateur }
    // token = jwt.sign(payload, secret)
    // res.status(201).json({ token });
});

app.delete('/token', (req, res) => {
    res.status(204).end();
    // Si on utilise un cookie d'authentification, il s'agit ici de le supprimer.
});

app.get('/user', (req, res) => {
    // l'utilisateur courant devrait déjà être récupéré par le middleware d'authentification
    //  typiquement dans req.user
    const code = req.user ? 200 : 401;
    res.status(code).json(req.user);
})

module.exports = app;