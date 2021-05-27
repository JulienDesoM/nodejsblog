const { Post } = require('./model/Post');
const { User } = require('./model/User');
const { Comment } = require('./model/Comment');
const { Tag } = require('./model/Tag');
const { sequelize } = require('./sequelize');

User.hasMany(Comment);
Comment.belongsTo(User);
User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);

Post.belongsToMany(Tag, { through: 'PostTag'});
Tag.belongsToMany(Post, { through: 'PostTag'});

module.exports = { Post, User, Comment, Tag, sequelize };
