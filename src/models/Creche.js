const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const Administrador = require("./Administrador");
const Crianca = require("./Crianca");
const Diretor = require("./Diretor");

const Creche = database.define(
  "creche",
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
    tableName: "creche",
  }
);

Administrador.belongsTo(Creche, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

Diretor.belongsTo(Creche, {
  constraints: true,
  foreignKey: "id_usuario_tipo",
});

Crianca.belongsTo(Creche);

Creche.hasMany(Crianca);

module.exports = Creche;
