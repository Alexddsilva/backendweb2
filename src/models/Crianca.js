const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");

const Crianca = database.define(
  "crianca",
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
    rg: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "crianca",
    underscored: true,
  }
);

module.exports = Crianca;
