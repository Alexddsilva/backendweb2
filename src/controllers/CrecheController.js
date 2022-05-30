const Creche = require("../models/Creche");

const CrecheController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const creche = await Creche.findByPk(id);

    return response.status(200).json(creche);
  },
};

module.exports = CrecheController;
