const Pais = require("../models/Pais");

const PaisController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const pais = await Pais.findByPk(id);

    return response.status(200).json(pais);
  },
};

module.exports = PaisController;
