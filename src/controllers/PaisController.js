const Pais = require("../models/Pais");

const PaisController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const pais = await Pais.findByPk(id);

    return response.status(200).json(pais);
  },
  create: async (request, response) => {
    const pais = request.body;
    try {
      const newPais = await Pais.create(pais);
      return response.status(201).json(newPais);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attPais = request.body;
    try {
      const updatedPais = await Pais.update(attPais);
      return response.status(200).json(updatedPais);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedPais = await Pais.destroy(id);
      return response.status(200).json(deletedPais);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = PaisController;
