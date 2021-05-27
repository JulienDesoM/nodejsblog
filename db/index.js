const { Post } = require('./model/Post');
const { User } = require('./model/User');
const { Comment } = require('./model/Comment');
const { Tag } = require('./model/Tag');
const { sequelize } = require('./sequelize');

/*
const header = { "alg": "HS256", "typ": "JWT" }
const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64')

const payload = { username: 'Flavio' }
const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64')

const crypto = require('crypto')
const jwtSecret = 'secretKey'

const signature = crypto.createHmac('sha256', jwtSecret).update(encodedHeader + '.' + encodedPayload).digest('base64')

const jwt = `${encodedHeader}.${encodedPayload}.${signature}`
*/
User.hasMany(Comment);
Comment.belongsTo(User);
User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);

Post.belongsToMany(Tag, { through: 'PostTag'});
Tag.belongsToMany(Post, { through: 'PostTag'});

module.exports = { Post, User, Comment, Tag, sequelize };


