const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");

const Diretor = database.define(
  "diretor",
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
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "diretor",
    underscored: true,
  }
);

module.exports = Diretor;
