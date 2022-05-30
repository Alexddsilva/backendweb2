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

Diretor.belongsTo(Creche, {
  constraints: true,
  foreignKey: "id_creche",
});

Creche.hasMany(Diretor, {
  constraints: true,
  foreignKey: "id_creche",
});

Crianca.belongsTo(Creche, {
  constraints: true,
  foreignKey: "id_creche",
});

Creche.hasMany(Crianca, {
  constraints: true,
  foreignKey: "id_creche",
});

module.exports = Creche;
