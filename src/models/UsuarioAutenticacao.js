const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");

const UsuarioAutenticacao = database.define(
  "usuario_autenticacao",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "usuario_autenticacao",
  }
);

module.exports = UsuarioAutenticacao;
