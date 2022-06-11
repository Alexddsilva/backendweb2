const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const Crianca = require("./Crianca");
const Usuario = require("./Usuario");

const Pais = database.define(
  "pais",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    tableName: "pais",
    underscored: true,
  }
);

Crianca.belongsTo(Pais, {
  constraints: true,
  foreignKey: "id_pais",
});

Pais.belongsTo(Usuario, {
  constraints: true,
  foreignKey: "id_usuario",
});

module.exports = Pais;
