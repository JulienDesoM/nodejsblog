const { Post } = require('./model/Post');
const { User } = require('./model/User');
const { Comment } = require('./model/Comment');
const { Tag } = require('./model/Tag');
const { sequelize } = require('./sequelize');

module.exports = { Post, User, Comment, Tag, sequelize };
