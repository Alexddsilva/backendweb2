const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const UsuarioAutenticacao = require("./UsuarioAutenticacao");
const UsuarioTipo = require("./UsuarioTipo");

const Usuario = database.define(
  "usuario",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
  },
  {
    tableName: "usuario",
    underscored: true,
  }
);

UsuarioTipo.hasMany(Usuario, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

Usuario.belongsTo(UsuarioTipo, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

Usuario.hasOne(UsuarioAutenticacao, {
  constraints: true,
  foreignKey: "id_usuario",
});

module.exports = Usuario;
