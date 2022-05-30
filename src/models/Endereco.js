const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");
const ComprovanteEndereco = require("./ComprovanteEndereco");
const Pais = require("./Pais");

const Endereco = database.define(
  "endereco",
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
    complemento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "endereco",
  }
);

ComprovanteEndereco.belongsTo(Endereco);

Endereco.hasMany(ComprovanteEndereco, {
  constraints: true,
  foreignKey: "id_endereco",
});

Pais.belongsTo(Endereco);

module.exports = Endereco;
