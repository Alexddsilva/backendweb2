const Endereco = require("../models/Endereco");

const EnderecoController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const endereco = await Endereco.findByPk(id);

    return response.status(200).json(endereco);
  },
};

module.exports = EnderecoController;
