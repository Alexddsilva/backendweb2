const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const Usuario = require("./Usuario");

const Administrador = database.define(
  "administrador",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    tableName: "administrador",
    underscored: true,
  }
);

Administrador.belongsTo(Usuario, {
  constraints: true,
  foreignKey: "id_usuario",
});

module.exports = Administrador;
