const res = require("express/lib/response");
const Administrador = require("../models/Administrador");

const AdministradorController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const administrador = await Administrador.findByPk(id);

    return response.status(200).json(administrador);
  },
  create: async (request, response) => {
    const administrador = request.body;
    console.log("administrador: ", request.body);
    try {
      const newAdministrador = await Administrador.create(administrador);
      return response.status(201).json(newAdministrador);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = AdministradorController;
