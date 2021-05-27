const express = require('express');
const { User } = require('../db');
const hash = require('./fonction/hash');

const app = express();

const secret = 'my_super_secret_uwu';

app.use(express.json());
  

// Hachage de password : utiliser le module 'crypto' (dans le coeur de node, pas besoin de npm install)
//  Cf. createHash -> utiliser sha256 ou sha512 comme algo
// Hachage de password (solution alternative) : utiliser le module 'bcrypt' (npm install), cf. doc sur github ou npm

// ==> faire une fonction qui prend le password en entrée et qui sort le hachage
//  ==> utiliser cette fonction à la création d'un user pour chiffrer le password
//  ==> utiliser cette fonction dans POST /token ci dessous (**)

app.post('/token', async (req, res) => {
    // req.body : username, password
    // valider le couple username password => validation hash avec la fonction sus-citée (**)
    // ensuite prendre l'ID de l'utilisateur validé
    //  payload = { sub: id_utilisateur }
    // token = jwt.sign(payload, secret)
    // res.status(201).json({ token });
    const username = req.body.username;
    const password = req.body.password;
    const encrypt = hash(password)

    const user = await User.findOne({ where : { username: username } });
    
    if (!user) {
        res.status(401).json({ msg: 'Auth failed' });
    } else {
        if (encrypt == user.password) {
            // token = generateToken(user);
            // res.status(201).json({ token: token })
            res.status(204).end();
        } else {
            res.status(401).json({ msg: 'Auth failed' });
        }
    }
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