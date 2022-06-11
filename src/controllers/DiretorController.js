const Diretor = require("../models/Diretor");

Diretor;

const DiretorController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const diretor = await Diretor.findByPk(id);

    return response.status(200).json(diretor);
  },
  create: async (request, response) => {
    const diretor = request.body;
    try {
      const newDiretor = await Diretor.create(diretor);
      return response.status(201).json(newDiretor);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attDiretor = request.body;
    try {
      const updatedDiretor = await Diretor.update(attDiretor);
      return response.status(200).json(updatedDiretor);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedDiretor = await Diretor.destroy(id);
      return response.status(200).json(deletedDiretor);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = DiretorController;
