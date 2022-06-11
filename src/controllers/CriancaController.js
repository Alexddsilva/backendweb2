const Crianca = require("../models/Crianca");

const CriancaController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const crianca = await Crianca.findByPk(id);

    return response.status(200).json(crianca);
  },
  create: async (request, response) => {
    const crianca = request.body;
    try {
      const newCrianca = await Crianca.create(crianca);
      return response.status(201).json(newCrianca);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attCrianca = request.body;
    try {
      const updatedCrianca = await Crianca.update(attCrianca);
      return response.status(200).json(updatedCrianca);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedCrianca = await Crianca.destroy(id);
      return response.status(200).json(deletedCrianca);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = CriancaController;
