const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const Crianca = require("./Crianca");

const Pais = database.define(
  "pais",
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
    tableName: "pais",
    underscored: true,
  }
);

Crianca.belongsTo(Pais, {
  constraints: true,
  foreignKey: "id_pais",
});

module.exports = Pais;
