const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");
module.exports = async function (request, response, next) {
  const { authorization } = request.headers;

  if (authorization) {
    const [, token] = authorization.split(" ");
    const { id } = jwt.verify(token, "12345");
    const {
      dataValues: { id_usuario_tipo },
    } = await Usuario.findByPk(id);

    if (id_usuario_tipo === 1) {
      return next();
    }

    return response.status(401).json({
      error:
        "Você não tem autorização para criar ou editar um registro de creche",
    });
  }
};
