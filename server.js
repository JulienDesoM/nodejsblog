const { sequelize } = require('./db');
const { app } = require('./app');

sequelize.sync({ alter: true }).then(() => {
  console.log('DB is ready !');
  app.listen(8080, () => {
    console.log("Server is ready !");
  });

}).catch((err) => {
  console.error(err);
});
