const Crianca = require("../models/Crianca");

const CriancaController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const crianca = await Crianca.findByPk(id);

    return response.status(200).json(crianca);
  },
};

module.exports = CriancaController;
