const ComprovanteEndereco = require("../models/ComprovanteEndereco");

const ComprovanteEnderecoController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const comprovanteEndereco = await ComprovanteEndereco.findByPk(id);

    return response.status(200).json(comprovanteEndereco);
  },
  create: async (request, response) => {
    const comprovanteEndereco = request.body;
    try {
      const newComprovanteEndereco = await ComprovanteEndereco.create(
        comprovanteEndereco
      );
      return response.status(201).json(newComprovanteEndereco);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attComprovanteEndereco = request.body;
    try {
      const updatedComprovanteEndereco = await ComprovanteEndereco.update(
        attComprovanteEndereco
      );
      return response.status(200).json(updatedComprovanteEndereco);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedComprovante = await ComprovanteEndereco.destroy({
        where: {
          id,
        },
      });
      return response.status(200).json(deletedComprovante);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = ComprovanteEnderecoController;
