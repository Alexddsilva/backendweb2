const Endereco = require("../models/Endereco");

const EnderecoController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const endereco = await Endereco.findByPk(id);

    return response.status(200).json(endereco);
  },
  create: async (request, response) => {
    const endereco = request.body;
    try {
      const newEndereco = await Endereco.create(endereco);
      return response.status(201).json(newEndereco);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attEndreco = request.body;
    try {
      const updatedEndereco = await Endereco.update(attEndreco);
      return response.status(200).json(updatedEndereco);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedEndereco = await Endereco.destroy(id);
      return response.status(200).json(deletedEndereco);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = EnderecoController;
