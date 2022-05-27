const UsuarioTipo = require("./models/UsuarioTipo");
const Pais = require("./models/Pais");
const Administrador = require("./models/Administrador");
const Endereco = require("./models/Endereco");
const Crianca = require("./models/Crianca");
const Creche = require("./models/Creche");
const ComprovanteEndereco = require("./models/ComprovanteEndereco");

const database = require("./connection");

database.sync({ force: true });
