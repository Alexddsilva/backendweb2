const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const UsuarioTipo = require("./UsuarioTipo");

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

Diretor.belongsTo(UsuarioTipo, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

UsuarioTipo.hasMany(Diretor, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

module.exports = Diretor;
