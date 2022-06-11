const Creche = require("../models/Creche");

const CrecheController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const creche = await Creche.findByPk(id);

    return response.status(200).json(creche);
  },
  create: async (request, response) => {
    const creche = request.body;
    try {
      const newCreche = await Creche.create(creche);
      return response.status(201).json(newCreche);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attCreche = request.body;
    try {
      const updatedCreche = await Creche.update(attCreche);
      return response.status(200).json(updatedCreche);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedCreche = await Creche.destroy({
        where: {
          id,
        },
      });
      return response.status(200).json(deletedCreche);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  findAll: async (_, response) => {
    try {
      const creches = await Creche.findAll();
      return response.status(200).json({ creches });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = CrecheController;
