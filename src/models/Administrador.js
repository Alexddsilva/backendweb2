const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const UsuarioTipo = require("./UsuarioTipo");

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

UsuarioTipo.hasMany(Administrador, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

Administrador.belongsTo(UsuarioTipo, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

module.exports = Administrador;
