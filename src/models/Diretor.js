const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const Usuario = require("./Usuario");

const Diretor = database.define(
  "diretor",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    tableName: "diretor",
    underscored: true,
  }
);

Diretor.belongsTo(Usuario, {
  constraints: true,
  foreignKey: "id_usuario",
});

module.exports = Diretor;
