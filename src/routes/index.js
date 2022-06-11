const express = require("express");
const AdministradorController = require("../controllers/AdministradorController");
const ComprovanteEnderecoController = require("../controllers/ComprovanteEnderecoController");
const CrecheController = require("../controllers/CrecheController");
const CriancaController = require("../controllers/CriancaController");
const DiretorController = require("../controllers/DiretorController");
const EnderecoController = require("../controllers/EndrecoController");
const PaisController = require("../controllers/PaisController");
const UsuarioTipoController = require("../controllers/UsuarioTipoController");
const UsuarioAutenticacaoController = require("../controllers/UsuarioAutenticacaoController");
const UsuarioController = require("../controllers/UsuarioController");
const middlewareCrianca = require("../middlewares/middlewareCrianca");
const middlewareAdministrador = require("../middlewares/middlewareAdministrador");

const routes = express.Router();

routes.post("/login", UsuarioAutenticacaoController.findOne);

routes.get("/administrador/:id", AdministradorController.findOne);
routes.put("/administrador", AdministradorController.edit);
routes.delete("/administrador/:id", AdministradorController.delete);

routes.get("/usuario/:id", UsuarioController.findOne);
routes.post("/usuario", UsuarioController.create);
routes.put("/usuario:/id", UsuarioController.edit);
routes.delete("/usuario:/id", UsuarioController.delete);

routes.get("/comprovanteendereco/:id", ComprovanteEnderecoController.findOne);

routes.get("/creche/:id", CrecheController.findOne);
routes.get("/creches", CrecheController.findAll);
routes.post("/creche", CrecheController.create);

routes.get("/crianca/:id", CriancaController.findOne);
routes.post("/crianca", middlewareCrianca, CriancaController.create);

routes.get("/diretor/:id", DiretorController.findOne);
routes.put("/diretor/:id", DiretorController.edit);
routes.delete("/diretor/:id", DiretorController.delete);

routes.get("/endereco/:id", EnderecoController.findOne);

routes.get("/pais/:id", PaisController.findOne);

routes.post("/usuarioTipo", UsuarioTipoController.create);

module.exports = routes;
