const Administrador = require("../models/Administrador");

const AdministradorController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const administrador = await Administrador.findByPk(id);

    return response.status(201).json(administrador);
  },
  edit: async (request, response) => {
    const attAdministrador = request.body;

    try {
      const updatedAdministrador = await Administrador.update(attAdministrador);
      return response.status(200).json(updatedAdministrador);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      await Administrador.destroy({
        where: {
          id,
        },
      });
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = AdministradorController;
