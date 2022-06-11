const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("postgres", "postgres", "1234", {
//   host: "localhost",
//   dialect: "postgres",
//   port: 5432,
// });

const sequelize = new Sequelize("sqlite::memory:");

module.exports = sequelize;
