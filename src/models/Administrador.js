const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");

const Administrador = database.define(
  "administrador",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "administrador",
    underscored: true,
  }
);

module.exports = Administrador;
