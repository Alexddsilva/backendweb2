const { Sequelize, DataTypes } = require("sequelize");
const database = require("../connection");

const ComprovanteEndereco = database.define(
  "comprovante_endereco",
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
    tableName: "comprovante_endereco",
  }
);

module.exports = ComprovanteEndereco;
