const UsuarioTipo = require("../models/UsuarioTipo");

const UsuarioTipoController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const usuarioTipo = await UsuarioTipo.findByPk(id);

    return response.status(200).json(usuarioTipo);
  },
  create: async (request, response) => {
    try {
      await UsuarioTipo.create({
        descricao: "ADMINISTRADOR",
      });
      await UsuarioTipo.create({
        descricao: "DIRETOR",
      });
      await UsuarioTipo.create({
        descricao: "PAIS",
      });
      const usuariosCriados = await UsuarioTipo.findAll();

      return response.status(201).json({ usuariosCriados });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attUsuarioTipo = request.body;
    try {
      const updateUsuarioTipo = await Pais.update(attUsuarioTipo);
      return response.status(200).json(updateUsuarioTipo);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedUsuarioTipo = await Pais.destroy({
        where: {
          id,
        },
      });
      return response.status(200).json(deletedUsuarioTipo);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = UsuarioTipoController;
