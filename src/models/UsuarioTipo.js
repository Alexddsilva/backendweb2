const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");

const UsuarioTipo = database.define(
  "usuario_tipo",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "usuario_tipo",
  }
);

module.exports = UsuarioTipo;
