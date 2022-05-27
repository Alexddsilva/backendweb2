const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const Administrador = require("./Administrador");
const Diretor = require("./Diretor");

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

Administrador.belongsTo(UsuarioTipo, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

Diretor.belongsTo(UsuarioTipo, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

module.exports = UsuarioTipo;
