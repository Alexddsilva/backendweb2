const ComprovanteEndereco = require("../models/ComprovanteEndereco");

const ComprovanteEnderecoController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const comprovanteEndereco = await ComprovanteEndereco.findByPk(id);

    return response.status(200).json(comprovanteEndereco);
  },
};

module.exports = ComprovanteEnderecoController;
