const express = require("express");
const AdministradorController = require("../controllers/AdministradorController");
const ComprovanteEnderecoController = require("../controllers/ComprovanteEnderecoController");
const CrecheController = require("../controllers/CrecheController");
const CriancaController = require("../controllers/CriancaController");
const DiretorController = require("../controllers/DiretorController");
const EnderecoController = require("../controllers/EndrecoController");
const PaisController = require("../controllers/PaisController");
const UsuarioTipoController = require("../controllers/UsuarioTipoController");

const routes = express.Router();

routes.get("/administrador/:id", AdministradorController.findOne);
routes.post("/administrador", AdministradorController.create);

routes.get("/comprovanteendereco/:id", ComprovanteEnderecoController.findOne);

routes.get("/creche/:id", CrecheController.findOne);

routes.get("/crianca/:id", CriancaController.findOne);

routes.get("/diretor/:id", DiretorController.findOne);

routes.get("/endereco/:id", EnderecoController.findOne);

routes.get("/pais/:id", PaisController.findOne);

routes.post("/usuarioTipo", UsuarioTipoController.create);

module.exports = routes;
