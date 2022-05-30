const UsuarioTipo = require("../models/UsuarioTipo");

const UsuarioTipoController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const usuarioTipo = await UsuarioTipo.findByPk(id);

    return response.status(200).json(usuarioTipo);
  },
  create: async (request, response) => {
    const usuarioTipo = request.body;
    try {
      const newUsuarioTipo = await UsuarioTipo.create(usuarioTipo);
      return response.status(201).json(newUsuarioTipo);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = UsuarioTipoController;
