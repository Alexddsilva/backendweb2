const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "d9954dfjre05dn",
  username: "unlmzxtjqxekob",
  password: "8f932d03a5800ff0a5f60ef8c00e2b5caa87eace7c130d2822dbd4b28ce4bad4",
  host: "ec2-3-226-163-72.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
